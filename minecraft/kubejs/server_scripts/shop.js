// priority: 0
//Shop Recipes

ServerEvents.recipes(event => {

	function shopItems(inAmount, inItem, outAmount, outItem){
		event.custom({type: "opolisutilities:shop", ingredient: {item: inItem},"itemInCount": inAmount, result: outItem, "itemOutCount": outAmount})
	}

	shopItems(16, bucks, 1, 'storagedrawers:controller')
	shopItems(16, bucks, 1, 'storagedrawers:controller_slave')
	shopItems(4, bucks, 1, 'caveopolis:sprayer')

	shopItems(32, bucks, 1, 'torchmaster:megatorch')
	shopItems(32, bucks, 1, 'torchmaster:feral_flare_lantern')
	shopItems(32, bucks, 1, 'torchmaster:dreadlamp')

	shopItems(4, bucks, 1, 'coldsnaphorde:large_present')
	shopItems(2, bucks, 1, 'coldsnaphorde:small_present')
	shopItems(3, bucks, 1, 'coldsnaphorde:present')

	event.remove({id:'opolisutilities:shop/buying/diamond'})
	event.remove({id:'opolisutilities:shop/buying/nether_star'})
	event.remove({id:'opolisutilities:shop/buying/emerald'})
})