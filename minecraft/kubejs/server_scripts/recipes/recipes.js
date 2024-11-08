//priority: 0;

ServerEvents.recipes((event) => {
  // replace recipes

  // storage module 1
  event.replaceInput(
    { output: "rftoolsstorage:storage_module0" },
    "minecraft:quartz",
    "#forge:ingots/invar"
  );
  event.replaceInput(
    { output: 'botania:ender_eye_block' },
    "minecraft:obsidian",
    "minecraft:nether_star"
  );
  event.replaceInput(
    { output: 'botania:ender_eye_block' },
    "minecraft:redstone",
    'hostilenetworks:nether_prediction'
  );

  // hopper botany pot
  event.replaceInput(
    { output: "#botanypots:hopper_botany_pots" },
    "minecraft:hopper",
    "#frozenopolis:hoppers"
  );

  // string
  event.replaceInput(
    { input: "minecraft:string", not: { output: "minecraft:white_wool" } },
    "minecraft:string",
    "#frozenopolis:string"
  );

  // storage scanner
  event.replaceInput(
    { id: "rftoolsstorage:storage_scanner" },
    "minecraft:ender_pearl",
    "thermal:tin_ingot"
  );

  event.replaceInput(
    { id: "rftoolsstorage:storage_scanner" },
    "minecraft:gold_ingot",
    "minecraft:copper_ingot"
  );

  // remove recipes

  event.remove({ id: "thermal:machine_frame" });
  event.remove({ id: "hostilenetworks:living_matter/nether_to_ender" });
  
  //coal nuggets

  event.remove({ id: "morenugget:coal_nuggets" });
  event.remove({ id: "morenugget:coal_nuggets_ingot" });

  // remove all obsidian recipes
  event.remove({ id: "botania:pure_daisy/obsidian" });
  event.remove({ id: "thermal:ice_charge/obsidian_from_lava_bucket" });

  // remove thermal misc recipes
  event.remove({ id: "thermal:ice_charge/ice_from_water_bucket" });
  event.remove({ id: "/thermal:fire_charge//" });

  //resource generators

  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "minecraft:ice" }],
      duration: 100,
      output: { item: "minecraft:ice" },
    })
    .id("frozenopolis:resource_generator/ice");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "minecraft:packed_ice" }],
      duration: 100,
      output: { item: "minecraft:packed_ice" },
    })
    .id("frozenopolis:resource_generator/packed_ice");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "minecraft:blue_ice" }],
      duration: 100,
      output: { item: "minecraft:blue_ice" },
    })
    .id("frozenopolis:resource_generator/blue_ice");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_deepslate" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_deepslate" },
    })
    .id("frozenopolis:resource_generator/frozen_deepslate");

  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_diorite" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_diorite" },
    })
    .id("frozenopolis:resource_generator/frozen_diorite");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_andesite" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_andesite" },
    })
    .id("frozenopolis:resource_generator/frozen_andesite");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_granite" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_granite" },
    })
    .id("frozenopolis:resource_generator/frozen_granite");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_netherrack" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_netherrack" },
    })
    .id("frozenopolis:resource_generator/frozen_netherrack");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "frozenopolis:frozen_stone" }],
      duration: 100,
      output: { item: "frozenopolis:frozen_stone" },
    })
    .id("frozenopolis:resource_generator/frozen_stone");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "iceopolis:ice_bricks" }],
      duration: 100,
      output: { item: "iceopolis:ice_bricks" },
    })
    .id("frozenopolis:resource_generator/ice_bricks");
  event
    .custom({
      type: "opolisutilities:resource_generator",
      ingredients: [{ item: "minecraft:netherrack" }],
      duration: 100,
      output: { item: "minecraft:netherrack" },
    })
    .id("frozenopolis:resource_generator/netherrack");

  event
    .custom({ type: "opolisutilities:rg2_blocks", block: "minecraft:ice" })
    .id("frozenopolis:resource_generator_2/ice");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "minecraft:packed_ice",
    })
    .id("frozenopolis:resource_generator_2/packed_ice");
  event
    .custom({ type: "opolisutilities:rg2_blocks", block: "minecraft:blue_ice" })
    .id("frozenopolis:resource_generator_2/blue_ice");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_diorite",
    })
    .id("frozenopolis:resource_generator_2/frozen_diorite");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_andesite",
    })
    .id("frozenopolis:resource_generator_2/frozen_andesite");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_deepslate",
    })
    .id("frozenopolis:resource_generator_2/frozen_deepslate");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_granite",
    })
    .id("frozenopolis:resource_generator_2/frozen_granite");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_netherrack",
    })
    .id("frozenopolis:resource_generator_2/frozen_netherrack");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "frozenopolis:frozen_stone",
    })
    .id("frozenopolis:resource_generator_2/frozen_stone");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "iceopolis:ice_bricks",
    })
    .id("frozenopolis:resource_generator_2/ice_bricks");
  event
    .custom({
      type: "opolisutilities:rg2_blocks",
      block: "minecraft:netherrack",
    })
    .id("frozenopolis:resource_generator_2/netherrack");

//weather

event
.shaped('frozenopolis:weather_catalyst', ["GTG", "TIT", "GTG"], {
  G: 'tiab:time_in_a_bottle',
  T: 'botanicadds:gaiasteel_ingot',
  I: 'iceopolis:ice_shard'
});


event
.shaped('frozenopolis:weather_changer', ["1F2", "FBF", "3F4"], {
  1: Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"water"}}}').strongNBT(),
  2: Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"fire"}}}').strongNBT(),
  3: Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"earth"}}}').strongNBT(),
  4: Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"air"}}}').strongNBT(),
  F: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').strongNBT(),
  B: 'elementalcraft:fireite_block'
});

  // creative elementcraft

  event
    .shaped(Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"water"}}}'), ["EEE", "EPE", "EEE"], {
      E: 'hostilenetworks:end_prediction',
      P: 'elementalcraft:pristine_water_gem'
    });
  event
    .shaped(Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"fire"}}}'), ["EEE", "EPE", "EEE"], {
      E: 'hostilenetworks:end_prediction',
      P: 'elementalcraft:pristine_fire_gem'
    });
  event
    .shaped(Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"air"}}}'), ["EEE", "EPE", "EEE"], {
      E: 'hostilenetworks:end_prediction',
      P: 'elementalcraft:pristine_air_gem'
    });
  event
    .shaped(Item.of('elementalcraft:creative_container', '{BlockEntityTag:{element_storage:{element_amount:1000000,element_capacity:1000000,element_type:"earth"}}}'), ["EEE", "EPE", "EEE"], {
      E: 'hostilenetworks:end_prediction',
      P: 'elementalcraft:pristine_earth_gem'
    });

  // dirt

  event
    .shaped("2x minecraft:dirt", [" L ", "LBL", " L "], {
      L: "#minecraft:leaves",
      B: "minecraft:bone_meal",
    })
    .id("frozenoplis:dirt");

  // dirt
  event
    .shaped("5x opolisutilities:b_bucks", [" G ", "GDG", " G "], {
      G: "minecraft:gold_ingot",
      D: "minecraft:diamond",
    })
    .id("frozenoplis:bucks");

  // furnace
  event
    .shaped("1x minecraft:furnace", ["CCC", "COC", "CCC"], {
      C: cobblestone,
      O: "minecraft:coal",
    })
    .id("minecraft:furnace");

  // ice chisel
  event
    .shaped("1x iceopolis:ice_chisel", [" SS", " SS", "S  "], { S: stick })
    .id("iceopolis:ice_chisel");

  // campfire
  event
    .shaped("1x minecraft:campfire", [" S ", "SSS", "LLL"], {
      S: stick,
      L: logs,
    })
    .id("minecraft:campfire");

  // calcite
  event
    .shaped("1x minecraft:calcite", [" S ", "STS", " S "], {
      S: "minecraft:snowball",
      T: "minecraft:stone",
    })
    .id("frozenopolis:calcite");

  // vines
  event
    .shaped("4x minecraft:vine", [" L ", " L ", " L "], {
      L: "#minecraft:leaves",
    })
    .id("frozenopolis:vines_from_leaves");

  event
    .campfireCooking("minecraft:vine", ["primalwinter:snowy_vine"])
    .id("frozenopolis:vines_from_snowy_vines");

  // leafy string
  event
    .shaped("2x opolisutilities:leafy_string", ["LLL"], {
      L: "#frozenopolis:vines",
    })
    .id("opolisutilities:leafy_string");

  // bowl of ice
  event
    .shaped("1x frozenopolis:bowl_of_ice", ["III", " B "], {
      I: "iceopolis:ice_shard",
      B: "minecraft:bowl",
    })
    .id("frozenopolis:ice_bowl");

  // water bowl
  event.campfireCooking("botania:water_bowl", ["frozenopolis:bowl_of_ice"]);

  // coooked fruit
  event.campfireCooking("frozenopolis:cooked_fruit", ["#forge:fruits"]);

  // charcoal
  event.campfireCooking("minecraft:charcoal", ["#minecraft:logs"]);

  // stone
  event.campfireCooking("minecraft:stone", ["minecraft:cobblestone"]);

  // x3 bone meal
  event.campfireCooking("3x minecraft:bone_meal", ["minecraft:calcite"]);

  // x2 bone
  event.campfireCooking("2x minecraft:bone", ["minecraft:bone_block"]);

  // brick
  event.campfireCooking("1x minecraft:brick", ["minecraft:clay_ball"]);

  //brick blast furnace

  event.replaceInput(
    { id: "brickfurnace:brick_blast_furnace" },
    iron_ingot,
    copper_ingot
  );

  // opolis util book
  event.recipes.minecraft.crafting_shapeless(
    Item.of(
      "patchouli:guide_book",
      '{"patchouli:book":"opolisutilities:guide_book"}'
    ),
    ["minecraft:snowball"]
  );

  // shard conversion
  event.recipes.minecraft.crafting_shapeless(
    Item.of(
      'coldsnaphorde:iceshard'
    ),
    ["iceopolis:ice_shard"]
  );

  event.recipes.minecraft.crafting_shapeless(
    Item.of(
      'iceopolis:ice_shard'
    ),
    ["coldsnaphorde:iceshard"]
  );

  // bowl of snow
  event.recipes.minecraft.crafting_shapeless("frozenopolis:bowl_of_snow", [
    "minecraft:snowball",
    "minecraft:bowl",
  ]);

  // grass block
  event.recipes.minecraft.crafting_shapeless("minecraft:grass_block", [
    "minecraft:grass",
    "minecraft:dirt",
  ]);

  // frozen stone
  stones.forEach((stone) => {
    event.recipes.minecraft
      .crafting_shapeless(`1x frozenopolis:frozen_${stone}`, [
        `minecraft:${stone}`,
        "iceopolis:sharpend_ice",
      ])
      .id(`frozenopolis:frozen_${stone}`);
  });

  //Melting Frozen ores

  function oreForMelting(ores) {
    event.smelting(AlmostUnified.getPreferredItemForTag(`forge:ores/${ores}`), [
      `frozenopolis:frozen_${ores}_ore`,
    ]);
    event.blasting(AlmostUnified.getPreferredItemForTag(`forge:ores/${ores}`), [
      `frozenopolis:frozen_${ores}_ore`,
    ]);
  }

  oreForMelting("iron");
  oreForMelting("apatite");
  oreForMelting("nickel");
  oreForMelting("cinnabar");
  oreForMelting("tin");
  oreForMelting("redstone");
  oreForMelting("silver");
  oreForMelting("diamond");
  oreForMelting("niter");
  oreForMelting("lead");
  oreForMelting("copper");
  oreForMelting("sulfur");

  oreForMelting("nether_gold");
  oreForMelting("deepslate_lapis");
  oreForMelting("deepslate_coal");
  oreForMelting("nether_quartz");

  event.smelting(`elementalcraft:inert_crystal_ore`, [
    `frozenopolis:frozen_inert_crystal_ore`,
  ]);
  event.smelting(`minecraft:ancient_debris`, [
    `frozenopolis:frozen_ancient_debris`,
  ]);

  event.blasting(`elementalcraft:inert_crystal_ore`, [
    `frozenopolis:frozen_inert_crystal_ore`,
  ]);
  event.blasting(`minecraft:ancient_debris`, [
    `frozenopolis:frozen_ancient_debris`,
  ]);
});
