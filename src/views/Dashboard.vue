<template>
  <div class="bg-white">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">30%</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Atropellamientos</h3>
        <p class="text-rose-600 text-sm">↑ Este mes</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">25%</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Robos</h3>
        <p class="text-cyan-600 text-sm">— Sin cambios</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">85%</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Reportes Resueltos</h3>
        <p class="text-emerald-600 text-sm">↑ Mejorando</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-slate-900">1,247</span>
        </div>
        <h3 class="text-slate-600 font-medium mb-1">Ciudadanos Activos</h3>
        <p class="text-indigo-600 text-sm">↑ +12% este mes</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <!-- Trend Chart -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-xl font-bold text-slate-900 mb-6">Tendencia de Incidentes</h3>
        <div id="chartdiv" style="width: 100%; height: 500px;"></div>
      </div>

      <!-- Distribution Chart -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-xl font-bold text-slate-900 mb-6">Distribución por Tipo de Incidente</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 rounded-full bg-rose-500"></div>
              <span class="text-slate-600">Atropellamientos</span>
            </div>
            <span class="text-slate-900 font-semibold">30%</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 rounded-full bg-cyan-500"></div>
              <span class="text-slate-600">Robos</span>
            </div>
            <span class="text-slate-900 font-semibold">25%</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 rounded-full bg-amber-400"></div>
              <span class="text-slate-600">Accidentes</span>
            </div>
            <span class="text-slate-900 font-semibold">20%</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 rounded-full bg-indigo-500"></div>
              <span class="text-slate-600">Otros</span>
            </div>
            <span class="text-slate-900 font-semibold">25%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations and Tips -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <!-- Recommendations -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-xl font-bold text-slate-900 mb-6">Recomendaciones Basadas en Datos</h3>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <h4 class="font-semibold text-rose-600 mb-2">Atropellamientos (30% este mes)</h4>
            <p class="text-slate-600 text-sm">Evita caminar por la Av. Juárez entre 6-8 PM. Usa pasos peatonales y mantente alerta.</p>
          </div>
          <div class="p-4 rounded-xl bg-cyan-50 border border-cyan-200">
            <h4 class="font-semibold text-cyan-600 mb-2">Robos (25% constante)</h4>
            <p class="text-slate-600 text-sm">Zona centro: evita mostrar objetos de valor después de las 9 PM. Camina en grupos.</p>
          </div>
        </div>
      </div>

      <!-- Safety Tips -->
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-xl font-bold text-slate-900 mb-6">Consejos de Seguridad</h3>
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-1">Mantente Conectado</h4>
              <p class="text-slate-600 text-sm">Comparte tu ubicación con familiares cuando salgas de noche.</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-1">App Siempre Lista</h4>
              <p class="text-slate-600 text-sm">Ten la app abierta en situaciones de riesgo para reportar rápidamente.</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-1">Comunidad Unida</h4>
              <p class="text-slate-600 text-sm">Participa en grupos vecinales y mantente informado de tu zona.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="text-center py-6">
      <p class="text-slate-400">alerta_cuidadana para un Xicotepec más seguro 2025</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

let root: any = null;

// Función para obtener el nombre de la calle desde coordenadas
async function obtenerCalle(lat: number, lon: number) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
    const data = await res.json();
    return data.address?.road ?? `Lat:${lat.toFixed(3)}, Lon:${lon.toFixed(3)}`;
  } catch (err) {
    console.error("Error al obtener calle:", err);
    return `Lat:${lat.toFixed(3)}, Lon:${lon.toFixed(3)}`;
  }
}

// Obtener zonas críticas con nombres de calles
async function fetchZonasCriticas() {
  try {
    const res = await fetch("http://127.0.0.1:8000/ml/zonas-criticas");
    const data = await res.json();
    if (!data.zonas_criticas) return [];

    const zonasConCalles = await Promise.all(
      data.zonas_criticas.map(async (zona: any) => {
        const calle = (zona.lat_centro != null && zona.lng_centro != null)
          ? await obtenerCalle(zona.lat_centro, zona.lng_centro)
          : `Zona ${zona.zona_id}`;

        return {
          country: calle,
          value: zona.cantidad_incidentes
        };
      })
    );

    return zonasConCalles;
  } catch (err) {
    console.error("Error al obtener zonas críticas:", err);
    return [];
  }
}

async function initChart() {
  const am5 = (window as any).am5;
  const am5xy = (window as any).am5xy;
  const am5themes_Animated = (window as any).am5themes_Animated;

  if (!am5 || !am5xy || !am5themes_Animated) return;

  const chartData = await fetchZonasCriticas();

  root = am5.Root.new("chartdiv");
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(
    am5xy.XYChart.new(root, { panX: true, panY: true, wheelX: "none", wheelY: "none", paddingLeft: 0 })
  );

  chart.zoomOutButton.set("forceHidden", true);

  const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30, minorGridEnabled: true });
  xRenderer.labels.template.setAll({ rotation: -90, centerY: am5.p50, centerX: 0, paddingRight: 15 });
  xRenderer.grid.template.set("visible", false);

  const xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, { maxDeviation: 0.3, categoryField: "country", renderer: xRenderer })
  );

  const yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, { maxDeviation: 0.3, min: 0, renderer: am5xy.AxisRendererY.new(root, {}) })
  );

  const series = chart.series.push(
    am5xy.ColumnSeries.new(root, { name: "Zonas Críticas", xAxis, yAxis, valueYField: "value", categoryXField: "country" })
  );

  series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
  series.columns.template.adapters.add("fill", (fill: any, target: any) => chart.get("colors").getIndex(series.columns.indexOf(target)));
  series.columns.template.adapters.add("stroke", (stroke: any, target: any) => chart.get("colors").getIndex(series.columns.indexOf(target)));

  series.bullets.push(() =>
    am5.Bullet.new(root, {
      locationY: 1,
      sprite: am5.Label.new(root, {
        text: "{valueYWorking.formatNumber('#.')}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true
      })
    })
  );

  xAxis.data.setAll(chartData);
  series.data.setAll(chartData);

  series.appear(1000);
  chart.appear(1000, 100);
}

onMounted(() => {
  const loadScript = (src: string) =>
    new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });

  loadScript("https://cdn.amcharts.com/lib/5/index.js")
    .then(() => loadScript("https://cdn.amcharts.com/lib/5/xy.js"))
    .then(() => loadScript("https://cdn.amcharts.com/lib/5/themes/Animated.js"))
    .then(() => initChart())
    .catch((err) => console.error("Error cargando scripts de amCharts:", err));
});

onBeforeUnmount(() => {
  if (root) root.dispose();
});
</script>
