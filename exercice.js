var exo_number = 2;

db = db.getSiblingDB("admin"); 
db.auth("admin","password"); 


switch(exo_number){
    case 0:
        print("Exo 0 - Exemple");
        db = db.getSiblingDB("adherentdb");
        var animateurs = db.animateurs.find({}, {nom:true, prenom:true});
        while(animateurs.hasNext()){
            printjson(animateurs.next());
        }
        break;
    case 1:
        print("Exo 1");
        db = db.getSiblingDB("adherentdb");
        var adherents = db.adherents.find({ville:"NANTES"}, {nom:true, prenom:true, ville:true});
        adherents.sort({nom:1});
        print("nbAdherents: "+adherents.lenght);
        while(adherents.hasNext()){
            printjson(adherents.next());
        }
        break;
    case 2:
        print("Exo 2");
        db = db.getSiblingDB("adherentdb");
        var adherents = db.adherents.find({ville:"NANTES"}, {nom:true, prenom:true, ville:true});
        adherents.sort({nom:1});
        print("nbAdherents: "+adherents.lenght);
        while(adherents.hasNext()){
            printjson(adherents.next());
        }

        break;
        
    case 3:

        break;
        
    case 4:

        break;
        
    case 5:

        break;
        
    case 6:

        break;
    
}

