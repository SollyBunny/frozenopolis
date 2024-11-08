priority: -100;

// Tag Blocks

ServerEvents.tags("block", (event) => {
  event.add("frozenopolis:stone", ["#forge:stone"]);

  event.add("frozenopolis:vines", [
    "minecraft:vine",
    "primalwinter:snowy_vine",
  ]);

  event.add("frozenopolis:hoppers", [
    "minecraft:hopper",
    "brickhopper:brick_hopper",
  ]);

  event.add("frozenopolis:deepslate", [
    "minecraft:deepslate",
    "minecraft:cobbled_deepslate",
  ]);
  event.remove("frozenopolis:stone", ["minecraft:deepslate"]);

  event.add("toughasnails:heating_blocks", [
    "minecraft:torch",
    "minecraft:wall_torch",
  ]);

  event.add("minecraft:planks", ["primitivestart:improvised_planks"]);

  event.add("frozenopolis:ice", [
    "minecraft:ice",
    "minecraft:packed_ice",
    "minecraft:blue_ice",
  ]);

  event.add("frozenopolis:dirt", [
    "minecraft:muddy_mangrove_roots",
    "minecraft:grass_block",
    "minecraft:coarse_dirt",
    "minecraft:rooted_dirt",
    "minecraft:podzol",
    "minecraft:dirt",
    "minecraft:mud",
  ]);

  event.add("ftbultimine:excluded_blocks", [
    "#frozenopolis:deepslate",
    "minecraft:snow_block",
    "minecraft:packed_ice",
    "minecraft:blue_ice",
    "#minecraft:logs",
    "minecraft:snow",
    "minecraft:ice",
    "#balm:stones",
    "#forge:stone",
  ]);
});

// Tag Items

ServerEvents.tags("item", (event) => {
  event.add("frozenopolis:stone", ["#forge:stone"]);

  event.add("frozenopolis:hoppers", [
    "minecraft:hopper",
    "brickhopper:brick_hopper",
  ]);

  event.add("frozenopolis:vines", [
    "minecraft:vine",
    "primalwinter:snowy_vine",
  ]);

  event.add("frozenopolis:string", [
    "minecraft:string",
    "opolisutilities:leafy_string",
  ]);

  event.add("minecraft:planks", ["primitivestart:improvised_planks"]);

  event.add("frozenopolis:deepslate", [
    "minecraft:deepslate",
    "minecraft:cobbled_deepslate",
  ]);

  event.add("frozenopolis:ice", [
    "minecraft:ice",
    "minecraft:packed_ice",
    "minecraft:blue_ice",
  ]);

  event.add("ftbultimine:tools", [
    "#forge:tools/pickaxes",
    "#forge:tools/axes",
    "#forge:tools/knives",
    "#forge:tools/hammers",
    "#forge:tools/shovel",
    "#forge:tools/hoes",
    "#forge:shears",
  ]);

  event.add("frozenopolis:dirt", [
    "minecraft:muddy_mangrove_roots",
    "minecraft:grass_block",
    "minecraft:coarse_dirt",
    "minecraft:rooted_dirt",
    "minecraft:podzol",
    "minecraft:dirt",
    "minecraft:mud",
  ]);

  event.add("forge:ores/nether_gold", ["minecraft:nether_gold_ore"]);

  event.add("forge:ores/deepslate_coal", ["minecraft:deepslate_coal_ore"]);

  event.add("forge:ores/deepslate_lapis", ["minecraft:deepslate_lapis_ore"]);

  event.add("forge:ores/nether_quartz", ["minecraft:nether_quartz_ore"]);

  event.add("forge:ores/inert_crystal", ["elementalcraft:inert_crystal_ore"]);

  event.remove("toughasnails:cooling_armor", [
    "toughasnails:leaf_helmet",
    "toughasnails:leaf_chestplate",
    "toughasnails:leaf_leggings",
    "toughasnails:leaf_boots",
  ]);

  event.add("toughasnails:cooling_armor", [
    "botania:manasteel_helmet",
    "botania:manasteel_chestplate",
    "botania:manasteel_leggings",
    "botania:manasteel_boots",

    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",

  ]);


  event.add("toughasnails:cooling_items", [
    "minecraft:snowball",
    "minecraft:snow_block",
    "iceopolis:ice_bricks",
    "#frozenopolis:ice",
  ]);
  
  event.add("toughasnails:heating_armor", [
    //  "toughasnails:leaf_helmet",
    "toughasnails:leaf_chestplate",
    "toughasnails:leaf_leggings",
    //  "toughasnails:leaf_boots",

    "minecraft:leather_helmet",
    "minecraft:leather_chestplate",
    "minecraft:leather_leggings",
    "minecraft:leather_boots",

    "minecraft:golden_helmet",
    "minecraft:golden_chestplate",
    "minecraft:golden_leggings",
    "minecraft:golden_boots",

    "botania:manaweave_helmet",
    "botania:manaweave_chestplate",
    "botania:manaweave_leggings",
    "botania:manaweave_boots",

  ]);
  
  event.add("toughasnails:heating_items", [
    "minecraft:magma_block",
    "minecraft:netherrack",
    "minecraft:blaze_rod",
    "minecraft:blaze_powder",
  ]);

  event.remove("frozenopolis:stone", ["minecraft:deepslate"]);

});
