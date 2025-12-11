import type { IncidentReport } from '@/types/storage'

const DB_NAME = 'AlertaCiudadanaDB'
const DB_VERSION = 1
const STORE_NAME = 'incidentReports'

// Abrir/crear la base de datos (siempre abre nueva conexión)
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    console.log('🔄 Abriendo IndexedDB...')
    const request = window.indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (e) => {
      console.log('🔄 Creando/actualizando estructura de BD...')
      const database = (e.target as IDBOpenDBRequest).result
      
      // Crear el object store para reportes de incidentes
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const objectStore = database.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true
        })
        
        // Crear índices para búsquedas más eficientes
        objectStore.createIndex('status', 'status', { unique: false })
        objectStore.createIndex('category', 'category', { unique: false })
        objectStore.createIndex('createdAt', 'createdAt', { unique: false })
        objectStore.createIndex('userId', 'userId', { unique: false })
        
        console.log('✅ Object Store creado:', STORE_NAME)
      }
    }

    request.onsuccess = () => {
      console.log('✅ IndexedDB abierta con éxito')
      resolve(request.result)
    }

    request.onerror = () => {
      console.error('❌ Error al abrir IndexedDB:', request.error)
      reject(request.error)
    }
  })
}

// Agregar un reporte de incidente
export const addIncidentReport = async (report: IncidentReport): Promise<number> => {
  console.log('📝 addIncidentReport llamado con:', report)
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    try {
      // Eliminar el id si existe para que se genere automáticamente
      const reportData = { ...report }
      if ('id' in reportData) {
        delete reportData.id
      }

      const transaction = database.transaction([STORE_NAME], 'readwrite')
      const store = transaction.objectStore(STORE_NAME)
      const request = store.add(reportData)

      request.onsuccess = () => {
        console.log('✅ Reporte agregado con ID:', request.result)
        database.close()
        resolve(request.result as number)
      }

      request.onerror = () => {
        console.error('❌ Error al agregar reporte:', request.error)
        database.close()
        reject(request.error)
      }

      transaction.onerror = () => {
        console.error('❌ Error en la transacción:', transaction.error)
        database.close()
        reject(transaction.error)
      }
    } catch (error) {
      console.error('❌ Error en try-catch:', error)
      database.close()
      reject(error)
    }
  })
}

// Obtener todos los reportes
export const getAllIncidentReports = async (): Promise<IncidentReport[]> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.getAll()

    request.onsuccess = () => {
      console.log('📋 Reportes obtenidos:', request.result.length)
      database.close()
      resolve(request.result)
    }

    request.onerror = () => {
      console.error('❌ Error al obtener reportes:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Obtener un reporte por ID
export const getIncidentReportById = async (id: number): Promise<IncidentReport | undefined> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get(id)

    request.onsuccess = () => {
      database.close()
      resolve(request.result)
    }

    request.onerror = () => {
      console.error('❌ Error al obtener reporte:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Obtener reportes por estado
export const getIncidentReportsByStatus = async (status: string): Promise<IncidentReport[]> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const index = store.index('status')
    const request = index.getAll(status)

    request.onsuccess = () => {
      console.log(`📋 Reportes con estado "${status}":`, request.result.length)
      database.close()
      resolve(request.result)
    }

    request.onerror = () => {
      console.error('❌ Error al obtener reportes por estado:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Actualizar un reporte
export const updateIncidentReport = async (report: IncidentReport): Promise<void> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.put(report)

    request.onsuccess = () => {
      console.log('✅ Reporte actualizado:', report.id)
      database.close()
      resolve()
    }

    request.onerror = () => {
      console.error('❌ Error al actualizar reporte:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Eliminar un reporte
export const deleteIncidentReport = async (id: number): Promise<void> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.delete(id)

    request.onsuccess = () => {
      console.log('🗑️ Reporte eliminado con ID:', id)
      database.close()
      resolve()
    }

    request.onerror = () => {
      console.error('❌ Error al eliminar reporte:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Limpiar todos los reportes
export const clearAllIncidentReports = async (): Promise<void> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.clear()

    request.onsuccess = () => {
      console.log('🧹 Todos los reportes eliminados')
      database.close()
      resolve()
    }

    request.onerror = () => {
      console.error('❌ Error al limpiar reportes:', request.error)
      database.close()
      reject(request.error)
    }
  })
}

// Contar reportes
export const countIncidentReports = async (): Promise<number> => {
  const database = await openDB()
  
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.count()

    request.onsuccess = () => {
      database.close()
      resolve(request.result)
    }

    request.onerror = () => {
      console.error('❌ Error al contar reportes:', request.error)
      database.close()
      reject(request.error)
    }
  })
}
