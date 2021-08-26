var exo_number = 0;

db = db.getSiblingDB("admin"); 
db.auth("admin","password"); 
db = db.getSiblingDB("adherentdb");


switch(exo_number){
    case 0:
        print("Exo 0 - Exemple");
        var animateurs = db.animateurs.find({}, {nom:true, prenom:true});
        while(animateurs.hasNext()){
            printjson(animateurs.next());
        }
        break;
    case 1:
        print("Exo 1");
        var animateurs = db.animateurs.find({}, {nom:true, prenom:true});
        while(animateurs.hasNext()){
            printjson(animateurs.next());
        }
        break;
    case 2:

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

