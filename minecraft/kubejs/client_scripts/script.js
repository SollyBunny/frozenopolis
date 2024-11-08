priority: 0;

REIEvents.removeCategories((event) => {
  event.yeet("minecraft:plugins/tag");
});

REIEvents.hide('item', event => {
  event.hide([
      'morenugget:coal_nuggets',
  ])
})