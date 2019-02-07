if(pm.response.code == 200) {
    var jsonData = pm.response.json();
    var csv = pm.variables.get("kit_items_csv") || "";
    
    //console.log(csv);
    
    if(jsonData.KitItems.length > 0) {
        
        jsonData.KitItems.each(function(item){
            var kitItem_csv = jsonData.Id + "," + item.Id + "," + item.Amount + "\n"
            csv = csv + kitItem_csv;
        })
        console.log(csv);
        copy(csv);
    }
    pm.environment.set("kit_items_csv", csv);
}
