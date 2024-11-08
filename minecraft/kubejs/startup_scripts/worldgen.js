// priority: 100

console.info("Hello again im removing ores from your world stand by");

WorldgenEvents.remove((event) => {
  event.removeOres((ores) => {
    ores.blocks = JsonIO.read("kubejs/config/ore_tags.json").tags;
  });
});

/*

WorldgenEvents.add((e) => {
  console.log("Adding entity spawns");


  e.addSpawn((spawn) => {
    spawn.category = "monster";
    spawn.entity = "coldsnaphorde:coldsnapstabber";
    spawn.weight = 200;
    spawn.minCount = 1;
    spawn.maxCount = 2;
    spawn.biomes = ["#forge:is_snowy"];
  });
});

/*
ForgeEvents.onEvent(
  "net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent",
  (event) => {
    event.canceled = true;
  }
);
*/
