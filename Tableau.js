function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
        url = "https://public.tableau.com/views/MM21TheGuardiansEPLPredictions201718_0/MM21EPLPredictions?:embed=y&:display_count=yes";

    var viz = new tableau.Viz(containerDiv, url);
}