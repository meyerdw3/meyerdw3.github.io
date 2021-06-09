function expand_collapse() {
    // If the panels have not all been expanded, then expand them all
    if ( document.getElementById("expand_collapse_button").classList.contains("expand_all") ) {

        //Alter the button text and classes to indicate what next button click will do
        document.getElementById("expand_collapse_button").classList.toggle("expand_all")
        document.getElementById("expand_collapse_button").classList.toggle("collapse_all")
        document.getElementById("expand_collapse_button").innerHTML = "Collapse<br>All"

        //Alter panel attributes to force all to expand
        //Panel #1
        document.getElementById("collapse1").setAttribute("class", "panel-collapse collapse in")
        document.getElementById("collapse1").setAttribute("aria-expanded", "true")
        document.getElementById("collapse1").style=""

        //Panel #2
        document.getElementById("collapse2").setAttribute("class", "panel-collapse collapse in")
        document.getElementById("collapse2").setAttribute("aria-expanded", "true")
        document.getElementById("collapse2").style=""

        //Panel #3
        document.getElementById("collapse3").setAttribute("class", "panel-collapse collapse in")
        document.getElementById("collapse3").setAttribute("aria-expanded", "true")
        document.getElementById("collapse3").style=""

        //Panel #4
        document.getElementById("collapse4").setAttribute("class", "panel-collapse collapse in")
        document.getElementById("collapse4").setAttribute("aria-expanded", "true")
        document.getElementById("collapse4").style=""

        //Panel #5
        document.getElementById("collapse5").setAttribute("class", "panel-collapse collapse in")
        document.getElementById("collapse5").setAttribute("aria-expanded", "true")
        document.getElementById("collapse5").style=""

        // Remove the "initial" class from each panel to ensure ::after icon changes
        document.querySelector(".why-you .panel-title").classList.remove("initial", "collapsed")
        document.querySelector(".why-me .panel-title").classList.remove("initial", "collapsed")
        document.querySelector(".skills .panel-title").classList.remove("initial", "collapsed")
        document.querySelector(".contribution .panel-title").classList.remove("initial", "collapsed")
        document.querySelector(".personal .panel-title").classList.remove("initial", "collapsed")
    } 
    
    // If the panels have not all been collapsed, then collapse them all
    else {

        //Alter the button text and classes to indicate what next button click will do
        document.getElementById("expand_collapse_button").classList.toggle("expand_all")
        document.getElementById("expand_collapse_button").classList.toggle("collapse_all")
        document.getElementById("expand_collapse_button").innerHTML = "Expand<br>All"

        //Alter panel attributes to force all to expand
        //Panel #1
        document.getElementById("collapse1").setAttribute("class", "panel-collapse collapse")
        document.getElementById("collapse1").setAttribute("aria-expanded", "false")
        document.getElementById("collapse1").style="height: 0px;"

        //Panel #2
        document.getElementById("collapse2").setAttribute("class", "panel-collapse collapse")
        document.getElementById("collapse2").setAttribute("aria-expanded", "false")
        document.getElementById("collapse2").style="height: 0px;"

        //Panel #3
        document.getElementById("collapse3").setAttribute("class", "panel-collapse collapse")
        document.getElementById("collapse3").setAttribute("aria-expanded", "false")
        document.getElementById("collapse3").style="height: 0px;"

        //Panel #4
        document.getElementById("collapse4").setAttribute("class", "panel-collapse collapse")
        document.getElementById("collapse4").setAttribute("aria-expanded", "false")
        document.getElementById("collapse4").style="height: 0px;"

        //Panel #5
        document.getElementById("collapse5").setAttribute("class", "panel-collapse collapse")
        document.getElementById("collapse5").setAttribute("aria-expanded", "false")
        document.getElementById("collapse5").style="height: 0px;"

        // Add the "collapsed" class to each panel to ensure ::after icon changes
        document.querySelector(".why-you .panel-title").classList.add("collapsed")
        document.querySelector(".why-me .panel-title").classList.add("collapsed")
        document.querySelector(".skills .panel-title").classList.add("collapsed")
        document.querySelector(".contribution .panel-title").classList.add("collapsed")
        document.querySelector(".personal .panel-title").classList.add("collapsed")
    }  
}