// priority: 0

//Loot Table Modification

LootJS.modifiers((event) => {
    //Loot Bags (basic)

    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").removeLoot('minecraft:cobblestone')
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").removeLoot('minecraft:dirt')
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").removeLoot('opolisutilities:b_bucks')

    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('caveopolis:mixed_stone_ingot').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:charcoal').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:coal').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:leather').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.3).addLoot('opolisutilities:b_bucks').limitCount([4, 16])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('opolisutilities:advanced_loot_box').limitCount([1, 2])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:baked_potato').limitCount([3, 8])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:golden_carrot').limitCount([1, 2])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:string').limitCount([2, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:bone').limitCount([2, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.2).addLoot('minecraft:leather').limitCount([2, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('minecraft:melon_seeds').limitCount([1, 2])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('minecraft:pumpkin_seeds').limitCount([1, 2])

    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('frozenopolis:frozen_diorite').limitCount([4, 16])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('frozenopolis:frozen_granite').limitCount([4, 16])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('frozenopolis:frozen_stone').limitCount([4, 16])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.15).addLoot('frozenopolis:frozen_andesite').limitCount([4, 16])

    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.05).addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1)).limitCount([1, 1])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.05).addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 3)).limitCount([1, 1])
    event.addLootTableModifier("opolisutilities:loot_boxes/basic_loot_box").randomChance(0.05).addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5)).limitCount([1, 1])
    
    
    //Loot Boxes (advanced)

    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").removeLoot('minecraft:stone')
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").removeLoot('minecraft:diamond')

    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.2).addLoot('minecraft:raw_gold').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.2).addLoot('minecraft:raw_iron').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.2).addLoot('minecraft:raw_copper').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.2).addLoot('caveopolis:raw_mixed_stone').limitCount([1, 4])

    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.1).addLoot('minecraft:quartz').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.2).addLoot('minecraft:redstone').limitCount([1, 4])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.1).addLoot('minecraft:obsidian').limitCount([1, 5])

    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.3).addLoot('opolisutilities:b_bucks').limitCount([1, 8])
    event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.1).addLoot('opolisutilities:item_repairer').limitCount([1, 1])

  //event.addLootTableModifier("opolisutilities:loot_boxes/advanced_loot_box").randomChance(0.15).addLoot('opolisutilities:elite_loot_box').limitCount([1, 2])


    //Loot Boxes (elite)

    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").removeLoot('minecraft:obsidian')
    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").removeLoot('minecraft:emerald')

    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").randomChance(0.1).addLoot('minecraft:diamond').limitCount([1, 2])
    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").randomChance(0.1).addLoot('minecraft:emerald').limitCount([1, 2])
    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").randomChance(0.02).addLoot('minecraft:ancient_debris').limitCount([1, 3])
    event.addLootTableModifier("opolisutilities:loot_boxes/elite_loot_box").randomChance(0.05).addLoot('minecraft:trident').limitCount([1, 1])


    //event.addLootTableModifier(/.*creeper.*/)//.randomChance(0.3).addLoot("minecraft:gunpowder");
        

});