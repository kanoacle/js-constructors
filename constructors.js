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
    if (this.mana >= cost) {
      this.mana -= cost;
      return true;
    } else {
      return false;
    }

  };

  Spellcaster.prototype.invoke = function(spell, target) {
    if (spell instanceof Spell !== true){
      return false;
    } else {
      if (spell instanceof DamageSpell === true) {
        if (target instanceof Spellcaster !== true) {
          return false;
        } else if (this.spendMana(spell.cost) !== true) {
          return false;
        }
        target.inflictDamage(spell.damage);
        return true;
      } else if (this.spendMana(spell.cost) !== true) {
        return false;
      } else {
        this.spendMana(spell.cost);
      }
      return true;
    }
  };

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
