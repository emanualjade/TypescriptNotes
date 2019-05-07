// ======================================
// ==== Generic extends interface simple example
// ======================================
interface HasLength {
  length: number
}
function logAndReturn<T extends HasLength>(arg: T): T {
  console.log(arg.length)
  return arg;
}

// ======================================
// ==== Generic extends interface example
// ======================================
interface Expirable {
  expiryDate: Date;
}
interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}
const chocoCakes: ChocolateCake[] = [
  {expiryDate: new Date()}
]
const vanillaCakes: VanillaCake[] = [
  {expiryDate: new Date()}
]

// Good - Seems this was the format needed when inside a jsx file
const getExpiredItems = function<Item extends Expirable>(items: Item[]) {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate)
}

// Good - Alternative format when not in a jsx file
const getExpiredItemsAlt = <Item extends Expirable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChocoCakes = getExpiredItems(chocoCakes)
const expiredVanillaCakes = getExpiredItems(vanillaCakes)
const expiredChocoCakesExplicit = getExpiredItems<ChocolateCake>(chocoCakes)
const expiredVanillaCakesExplicit = getExpiredItems<VanillaCake>(vanillaCakes)
const expiredChocoCakesAlt = getExpiredItemsAlt(chocoCakes)
const expiredVanillaCakesAlt = getExpiredItemsAlt(vanillaCakes)

// ======================================
// ==== Alternative syntax using interface to describe the function
// It keeps the function syntax cleaner
// ======================================
interface Expirable {
  expiryDate: Date;
}
interface ChocolateCookie extends Expirable {}
interface VanillaCookie extends Expirable {}
interface GetTheExpiredItemsFunction {
  <Item extends Expirable>(items: Array<Item>): Array<Item>;
}

const chocoCookies: ChocolateCookie[] = [
  {expiryDate: new Date()}
]
const vanillaCookies: VanillaCookie[] = [
  {expiryDate: new Date()}
]

// Good - Seems this was the format needed when inside a jsx file
const getTheExpiredItems: GetTheExpiredItemsFunction = function(items) {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate)
}

// Good - Alternative format when not in a jsx file
const getTheExpiredItemsAlt: GetTheExpiredItemsFunction = (items) => {
  const currentDate = new Date().getTime();
  return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChocoCookies = getTheExpiredItems(chocoCookies)
const expiredVanillaCookies = getTheExpiredItems(vanillaCookies)
const expiredChocoCookiesExplicit = getTheExpiredItems<ChocolateCookie>(chocoCookies)
const expiredVanillaCookiesExplicit = getTheExpiredItems<VanillaCookie>(vanillaCookies)
const expiredChocoCookiesAlt = getTheExpiredItemsAlt(chocoCookies)
const expiredVanillaCookiesAlt = getTheExpiredItemsAlt(vanillaCookies)