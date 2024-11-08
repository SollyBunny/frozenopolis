// priority: 100;

ServerEvents.recipes((event) => {
  // remove recipes
  event.remove({ id: "/botania:orechid//" });
  event.remove({ id: "/botania:orechid_ignem//" });

  // white mystical flower -> [any mystical flower + white dye] (petal appothecary)
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:mystical_flowers",
        },
        {
          item: "minecraft:snowball",
        },
      ],
      output: {
        item: "botania:white_mystical_flower",
      },
      reagent: {
        item: "minecraft:white_dye",
      },
    })
    .id("frozenopolis:white_mystical_flower");

  // green mystical flower -> [any mystical flower + green dye] (petal appothecary)
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:mystical_flowers",
        },
        {
          tag: "minecraft:leaves",
        },
      ],
      output: {
        item: "botania:green_mystical_flower",
      },
      reagent: {
        item: "minecraft:green_dye",
      },
    })
    .id("frozenopolis:green_mystical_flower");

  // grass seeds -> [x2 green petals + dirt] (petal appothecary)
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:petals/green",
        },
        {
          tag: "botania:petals/green",
        },
      ],
      output: {
        item: "botania:grass_seeds",
      },
      reagent: {
        item: "minecraft:dirt",
      },
    })
    .id("botania:mana_infusion/grass_seeds");

  // orechid -> [x2 green petals + dirt] (petal appothecary)
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          tag: "botania:petals/black",
        },
        {
          tag: "botania:petals/green",
        },
        {
          tag: "botania:petals/red",
        },
        {
          tag: "botania:petals/white",
        },
        {
          tag: "botania:petals/pink",
        },
        {
          tag: "minecraft:coals",
        },
      ],
      output: {
        item: "botania:orechid",
      },
      reagent: {
        tag: "forge:seeds",
      },
    })
    .id("botania:petal_apothecary/orechid");

  // orechid nether -> [x2 green petals + dirt] (petal appothecary)
  event
    .custom({
      type: "botania:petal_apothecary",
      ingredients: [
        {
          item: "frozenopolis:frozen_netherrack",
        },
        {
          item: "botania:orechid",
        },
        {
          tag: "botania:petals/red",
        },
        {
          tag: "botania:petals/gray",
        },
        {
          tag: "botania:petals/black",
        },
        {
          tag: "botania:petals/light_gray",
        },
      ],
      output: {
        item: "botania:orechid_ignem",
      },
      reagent: {
        tag: "forge:seeds",
      },
    })
    .id("botania:petal_apothecary/orechid_ignem");

    // diorite -> iron + silver

  event.recipes.botania.orechid(
    "frozenopolis:frozen_silver_ore",
    "frozenopolis:frozen_diorite",
    1
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_iron_ore",
    "frozenopolis:frozen_diorite",
    3
  );

  // granite -> nickel + copper + redstone

  event.recipes.botania.orechid(
    "frozenopolis:frozen_nickel_ore",
    "frozenopolis:frozen_granite",
    1
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_copper_ore",
    "frozenopolis:frozen_granite",
    3
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_redstone_ore",
    "frozenopolis:frozen_granite",
    1
  );

  // andesite -> lead + tin

  event.recipes.botania.orechid(
    "frozenopolis:frozen_lead_ore",
    "frozenopolis:frozen_andesite",
    1
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_tin_ore",
    "frozenopolis:frozen_andesite",
    1
  );

  // netherrack(frozen) -> diamond + netherite + quartz + gold

  event.recipes.botania.orechid_ignem(
    "frozenopolis:frozen_diamond_ore",
    "frozenopolis:frozen_netherrack",
    1
  );

  event.recipes.botania.orechid_ignem(
    "frozenopolis:frozen_nether_quartz_ore",
    "frozenopolis:frozen_netherrack",
    7
  );

  event.recipes.botania.orechid_ignem(
    "frozenopolis:frozen_nether_gold_ore",
    "frozenopolis:frozen_netherrack",
    3
  );

  event.recipes.botania.orechid_ignem(
    "frozenopolis:frozen_ancient_debris",
    "frozenopolis:frozen_netherrack",
    1
  );

  // deepslate -> coal + lapis

  event.recipes.botania.orechid(
    "frozenopolis:frozen_deepslate_coal_ore",
    "frozenopolis:frozen_deepslate",
    3
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_deepslate_lapis_ore",
    "frozenopolis:frozen_deepslate",
    1
  );

  // stone -> niter + cinnabar + apatite + sulfur + inert crystals

  event.recipes.botania.orechid(
    "frozenopolis:frozen_apatite_ore",
    "frozenopolis:frozen_stone",
    3
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_niter_ore",
    "frozenopolis:frozen_stone",
    3
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_sulfur_ore",
    "frozenopolis:frozen_stone",
    3
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_cinnabar_ore",
    "frozenopolis:frozen_stone",
    1
  );

  event.recipes.botania.orechid(
    "frozenopolis:frozen_inert_crystal_ore",
    "frozenopolis:frozen_stone",
    1
  );

  // dirt -> clay
  event.recipes.botania.mana_infusion("minecraft:clay", "#frozenopolis:dirt");
  // machine frame to machine frame
  event.recipes.botania.mana_infusion("thermal:machine_frame", "rftoolsbase:machine_frame");
  event.recipes.botania.mana_infusion('hostilenetworks:end_prediction', 'hostilenetworks:nether_prediction', 50000, 'botania:ender_eye_block');

  // mana spreader
  event
    .shaped("1x botania:mana_spreader", ["LLL", "TTF", "LLL"], {
      L: "#botania:livingwood_logs",
      T: "botania:livingwood_twig",
      F: "#botania:petals",
    })
    .id("botania:mana_spreader");

  //coarse dirt to clay orechid
  event.recipes.botania
    .orechid(`minecraft:clay`, "minecraft:coarse_dirt", 1)
    .id(`frozenopolis:clay_orechid`);
});
