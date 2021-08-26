var exo_number = 9;

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
    // Atelier 1
    case 1:
        print("Exo 1");
        db = db.getSiblingDB("adherentdb");
        var adherents = db.adherents.find({ville:"NANTES"}, {nom:true, prenom:true, ville:true});
        var nbAdherents = db.adherents.count({ville:"NANTES"});
        adherents.sort({nom:1});
        print("nbAdherents: "+nbAdherents);
        while(adherents.hasNext()){
            //printjson(adherents.next());
        }
        break;
    case 2:
        print("Exo 2");
        db = db.getSiblingDB("adherentdb");
        var adherents = db.adherents.find({age: { $gte:30, $lte:40}}, {nom:true, prenom:true, ville:true});
        var nbAdherents = db.adherents.count({age: { $gte:30, $lte:40}});
        print("nbAdherents: "+nbAdherents);
        while(adherents.hasNext()){
            //printjson(adherents.next());
        }
        break;
    case 3:
        print("Exo 3");
        db = db.getSiblingDB("adherentdb");
        var nbAteliers = db.ateliers.count({genre:"SPORT"});
        print("nbAteliers: "+nbAteliers);
        break;
    case 4:
        print("Exo 4");
        db = db.getSiblingDB("adherentdb");
        var adherents = db.adherents.find({nom: /^M/}, {nom:true, prenom:true, ville:true});
        var nbAdherents = db.adherents.count({nom: /^M/});
        print("nbAdherents: "+nbAdherents);
        while(adherents.hasNext()){
            printjson(adherents.next());
        }
        break; 
    case 5:
        print("Exo 5");
        
        break;
        
    case 6:
        print("Exo 6");
        db.adherents.find(
            {naissance: {$gte: ISODate("1980-01-01")}},
            {nom:true, prenom:true, naissance:true}
        ).forEach(printjson);
        break;
        
    // Atelier 2
    case 7:
        print("Exo 7");
        db = db.getSiblingDB("adherentdb");
        var nbAteliers = db.ateliers.count();
        print("nbAteliers: "+nbAteliers);
        db.ateliers.insert([{
            intitule: "TEST",
            genre: "SCIENCES"
        }]);
        var nbAteliers = db.ateliers.count();
        print("nbAteliers: "+nbAteliers);          
        break;
    case 8:
        print("Exo 8");

        break;
        
    case 9:
        print("Exo 9");
        db = db.getSiblingDB("adherentdb");
        var adherent = db.adherents.findOne({nom:"PARKER"});
        printjson(adherent);
        db.adherents.update({nom:"PARKER"},{$set:{email:adherent.nom+adherent.prenom+"@mail.eu"}});
        var adherent = db.adherents.findOne({nom:"PARKER"});
        printjson(adherent);
        break;
    case 10:
        print("Exo 10");

        break;
        
    // Atelier 3
    case 11:
        print("Exo 11");
        db = db.getSiblingDB("adherentdb");
        var nbInscriptions = db.inscriptions.count({});
        print("nbInscriptions: "+nbInscriptions);

        db.clients.aggregate([
            //{$unwind: "$comptes"},
            {$project: {
                atelier_id:"$comptes.numero", 
                solde:{$sum:"$comptes.operations.montant"}
        }},
            {$group: {
                _id:"$numero", 
                numero:{ $first:"$numero" }, 
                solde:{ $sum:"$solde" }
        }},
            {$project: {
                numero:1,
                solde:1
        }},
            {$out: "out_comptes_solde"}
        ]);

        break;
    case 12:
        print("Exo 12");

        break;
}