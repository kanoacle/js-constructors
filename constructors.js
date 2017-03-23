function Spell(name, cost, description) {
  this.name = name;
  this.cost = cost;
  this.description = description;
}

  Spell.prototype.getDetails = function() {
    return this.name + " | " + this.cost + " | " + this.description;
  };

function DamageSpell(name, cost, damage, description) {
  Spell.call(this, name, cost, description);
  this.damage = damage;
}

  DamageSpell.prototype = Object.create(Spell.prototype, {
    constructor: DamageSpell
  });

function Spellcaster(name, health, mana) {
  this.name = name;
  this.health = health;
  this.mana = mana;
  this.isAlive = true;
}

  Spellcaster.prototype.inflictDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }
  };

  Spellcaster.prototype.spendMana = function(cost) {
    if (this.mana > cost) {
      this.mana -= cost;
      return true;
    } else {
      return false;
    }

  };

  Spellcaster.prototype.invoke = function(spell, target) {
    if (spell instanceof Spell === false && spell instanceof DamageSpell === false){
      return false;
    } else if (spell instanceof Spell === false && spell instanceof DamageSpell === true) {
      if (target !== Spellcaster) {
        return false;
      }
    } else {

    }
  };
/**
 * Now that you've created some spells, let's create
 * `Spellcaster` objects that can use them!
 *
 * @name Spellcaster
 * @param {string} name         The spellcaster's name.
 * @param {number} health       The spellcaster's health points.
 * @param {number} mana         The spellcaster's mana points, used for casting spells.
 * @property {string} name
 * @property {number} health
 * @property {mana} mana
 * @property {boolean} isAlive  Default value should be `true`.
 * @method  inflictDamage
 * @method  spendMana
 * @method  invoke
 */

  /*
   * @method inflictDamage
   *
   * The spellcaster loses health equal to `damage`.
   * Health should never be negative.
   * If the spellcaster's health drops to 0,
   * its `isAlive` property should be set to `false`.
   *
   * @param  {number} damage  Amount of damage to deal to the spellcaster

*/
  /**
   * @method spendMana
   *
   * Reduces the spellcaster's mana by `cost`.
   * Mana should only be reduced only if there is enough mana to spend.
   *
   * @param  {number} cost      The amount of mana to spend.
   * @return {boolean} success  Whether mana was successfully spent.
   */

  /**
   * @method invoke
   *
   * Allows the spellcaster to cast spells.
   * The first parameter should either be a `Spell` or `DamageSpell`.
   * If it is a `DamageSpell`, the second parameter should be a `Spellcaster`.
   * The function should return `false` if the above conditions are not satisfied.
   *
   * You should use `instanceof` to check for these conditions.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   *
   * Next check if the spellcaster has enough mana to cast the spell.
   * If it can cast a spell, it should lose mana  equal to the spell's cost.
   * If there is not enough mana, return `false`.
   *
   * If there is enough mana to cast the spell, return `true`.
   * In addition, if it is a `DamageSpell` reduce the target's health by the spell's damage value.
   *
   * Use functions you've previously created: (`inflictDamage`, `spendMana`)
   * to help you with this.
   *
   * @param  {(Spell|DamageSpell)} spell  The spell to be cast.
   * @param  {Spellcaster} target         The spell target to be inflicted.
   * @return {boolean}                    Whether the spell was successfully cast.
   */
