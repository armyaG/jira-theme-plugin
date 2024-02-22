AJS.$(document).ready(function() {
    AJS.toInit( function(){
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function(e, context, reason) {     
        if(!JIRA.isAdmin()) { // si l'utilisateur n'est pas admin
            console.log("Issue view loaded :::::::::::::");
            deleteProjectSidebar();
            deleteStepperPanelTitle();
            create();
            introduction();

            /*ajouter des propereties a
            la classe : issue-data-block*/

            var items = AJS.$(".issue-data-block");
            items.css({
                "border-bottom": "1px solid rgb(230,230,230)","padding": "10px"
            });

            /*Ajouter des lignes en blue entres les items
            de la section date et personnes
            de l'ecran de visualisation d'une demande*/

            AJS.$("dl").css({
                "border-bottom": "1px solid rgb(230,230,230)"
            });


            AJS.$(".name").css({
                "color": "black"
            });


            AJS.$("#details-module, #Scoring, #descriptionmodule, #attachmentmodule, #activitymodule, #addcomment, #datesmodule").css({
                "padding":"30px",
                "border-radius":"10px",
                "background":"white",
                "margin-top" : "30px"
            });

            AJS.$(".issue-body-content").css({
                "background":"#e4e4e7",
                "padding-top" : "10px"
            });



            //Icon
            AJS.$(".icon").css({
                "color": "#fff",
            });


            AJS.$(".aui-dropdown2-trigger").css({
                "font-weight": "bold",
                "color":"white",
            });

            AJS.$(".aui-nav-link:hover").css({
                "color": "#6b3d91",
                "background":"white",
            });



            //les a de section
            AJS.$("button.toggle-title").css({
                "background": "#6b3d91",
                "color": "white"

            });

            AJS.$("button.toggle-title path").css({
                "fill": "white"

            });
            

            //les dd de la section a gauche
            AJS.$("dd").css({
                //"background": "rgb(230,230,230)",
                // "border":"2px solid white",
                "font-weight": "bold"

            });

            //le contenu des champs
            // AJS.$(".value ").css({
            //     "background": "rgb(230,230,230)",
            //     "font-weight": "bold",
            //     "border":"solid 2px white",
            //     "border-radius": "3px"
            // });


            //issueaction-workflow-transition
            //Met en bold les infos de la demande
            AJS.$(".toolbar-trigger").css({
                "font-weight": "bold",
                "color":"white",
            });


            //stepper-panel
            AJS.$("#stepper-panel").css({
                "background": "#fff",
                "font-weight": "bold",
                "color":"white",
            });



            //les bouttons
            AJS.$(".aui-button").css({
                "background": "#6b3d91",
                "font-weight": "bold",
                "color":"white",
            
            });


            //les anglets
            //menu-item
            AJS.$(".aui-page-panel").css({
                "background":"#f0f0f7",
                "border-radius":"20px",
                // "opacity":"0.8",
                "-webkit-box-shadow": "inset 8px 8px 24px 0px rgba(66, 68, 90, 1);\n" +
                    "-moz-box-shadow: inset 8px 8px 24px 0px rgba(66, 68, 90, 1)",
                "box-shadow":"-2px 4px 24px 3px rgba(165, 165, 165, 1)",
            });



            AJS.$("#login-form-submit").css({
                "background":"none",
                "color":"#6b3d91"
            });

            AJS.$("#login-form-cancel").css({
                "background":"none",
                "color":"#6b3d91"
            });


//             //center et reduire la taille du gadget d'thentification
            if(AJS.params.loggedInUser.length<=0){

                AJS.$("#content").css({
                    // "background-color":"white",
                    "margin-top":"50px"
                });
            
            
            }
            
            else{
                console.log("User is  loggedIn");
            
                AJS.$("#content").css({
                    // "background-color":"rgba(255,255,255,0.6)"
                });
            }
//             //arriere plan pour tout les tbleau de bord
            url ="url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            AJS.$("#jira").css({
                "background-image":url,
                "background-attachment":"fixed",
                "background-position":"center 75%",
                "background-repeat":"no-repeat",
                "background-color":"transparent"
            });
//             //
            AJS.$("#content").css({
                "border-radius":"20px",
                "margin":"20px",
                "padding":"20px"
            });

            AJS.$("div.dashboard-tabs").css({
                "background-color":"transparent",
                "border":"none"
            });

            AJS.$("div.aui-page-header").css({
                "background-color":"transparent"
            });

            AJS.$(".aui-header").css({
                "background-color":"#6b3d91",
                "margin-bottom":"20px",
                "border-bottom":"0px"
            });

            AJS.$("#dashboard").css({
                "background-color":"transparent",
                "border-bottom":"0px"
            });

            AJS.$("div.dashboard-tabs").css("border","none");


            AJS.$("#jira .dashboard ul.column li.gadget").css("border","none");



            AJS.$("#jira .footer, #footer-logo").css("background-color","transparent")


            AJS.$("#dashboard-content").css("background-color","transparent")

            //  AJS.$(".menu-item").addClass("aui-button");
             AJS.$(".menu-item a").css({
                 "font-weight": "bold"
             });

             AJS.$("#create_link").css({
                "background": "white",
                "color":"#6b3d91"
            });

            AJS.$(".mode-header").css({
                "color": "white",
                "background":"#bcbccc",
                "border-radius":"5px",
                "font-weight": "bold",

            });

            AJS.$("h4.toggle-title").css({
                "color": "#6b3d91",
                "font-size": "1.3em", 
                "margin-top": "-10px"

            });

            AJS.$("#peoplemodule").css({
                "background": "#ccc5c5",
                "padding":"30px",
                "border-radius":"10px",
                "margin-top" : "30px"

            });

            
            AJS.$("#peoplemodule-label").css({
                "background": "#6b3d91",
                "color":"white"

            });

            AJS.$("#peopledetails").css({
                "color":"#6b3d91"

            });

            AJS.$("#peopledetails dt").css({
                "color":"black"

            });

            AJS.$("#peopledetails dd").css({
                "border": "none!important"

            });

            AJS.$("#issuedetails .item .wrap").css({
                "border": "2px solid #efefff",
                "margin": "2px"

            });

            AJS.$(".wrap").css({
                "border": "2px solid #efefff",
                "margin": "2px"

            });

            AJS.$(".people-details dd").css({
                "border": "none"

            });

            AJS.$(".aui-tabs>.tabs-menu>.menu-item").css({
                "background": "#eee"
            });

            AJS.$(".aui-tabs>.tabs-menu>.menu-item>a strong").css({
                "color": "#6b3d91"
            });

        }
    });
    });
    console.log("end execution isseu view js");

});

    /*
    * Supprimer le pannel lateral projet a droite
    *de l'ecran de visualisation de la demande
    */
    deleteProjectSidebar = function(){
        //AJS.$(".projects-sidebar").remove();
        AJS.$(".aui-sidebar").remove();


    };

deleteStepperPanelTitle = function(){
    AJS.$("#stepper-panel_heading").remove();
}
//
//
function introduction(){

    AJS.$('.g-intro').empty();
    var desc="<div class='g-intro'>"+
        "<div class='intro'>"+
        "<img class='intro-logo' src='https://talentsconsult.com/wp-content/uploads/2022/03/logo-talents-consulting-flat.png' style='height: 70px; width:120px'>"+
        "<h3><strong>TALENTS CONSULTING</strong></h3>"+
        "<p style='font-size:13px'>"+
        "Excellence Opérationnelle, Performance Globale, Amélioration Continue."+
        "</p>"+
        "<p style='font-size:13px'>"+
        "<strong style='color:#0052cc'>La Qualité au bout des doigts !</strong>"+
        "</p>"+

        "</div>"+
        "</div>";
    AJS.$('.g-intro').append(desc);

}

// //Création de demande
function create(){
    AJS.$('.g-intro').empty();

    var desc="<div class='g-intro'>"+
        "<div class='intro'>"+
        "<img class='intro-logo' src='https://talentsconsult.com/wp-content/uploads/2022/03/logo-talents-consulting-flat.png' style='height: 70px; width:120px'>"+
        "<h3><strong>MELENTAAN</strong></h3>"+
        "<p style='font-size:13px'>"+
        "Excellence Opérationnelle, Performance Globale, Amélioration Continue."+
        "<strong style='color:#0052cc'>La Qualité au bout des doigts !</strong>"+
        "</p>"+
        "<a id='create_link' class='aui-button aui-button-primary aui-style create-issue ' "+
        "title='Soumettre une demande / un bogue / demande de fonctionnalité / etc. ( Type 'c' )'"+
        " href='/jira/secure/CreateIssue!default.jspa'+ accesskey='c'>Créer"+
        "</a>"

    "</div>"+
    "</div>";

    AJS.$('.g-intro').append(desc);
}
