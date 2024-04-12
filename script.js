const { createApp } = Vue;
createApp({
    data() {
        return {
            hero: { health: 100 },
            villain: { health: 100 }
        }
    },
    methods: {
        attack(isHero) {
            if (isHero) {
                this.villain.health -= 15; // Vilão leva 15% de dano
                if (this.hero.health > 20) {
                    this.hero.health -= 5; // Heroi leva 5% de dano
                } else {
                    this.hero.health -= 10; // Heroi leva 10% de dano se a saúde estiver abaixo de 20%
                }
                this.checkHealth();
                this.villainAction();
            }
        },
        defend(isHero) {
            if (isHero) {
                this.villain.health -= 15; // Vilão leva 15% de dano
                this.hero.health -= 5; // Heroi leva 5% de dano
                this.checkHealth();
                this.villainAction();
            }
        },
        usePotion(isHero) {
            if (isHero) {
                this.hero.health += 40; // Heroi ganha 40% de saúde
                if (this.hero.health > 100) {
                    this.hero.health = 100; // Saúde não pode exceder 100%
                }
                this.villainAction();
            }
        },
        run(isHero) {
            if (isHero) {
                if (this.hero.health <= 20) {
                    this.hero.health -= 5; // Heroi perde 5% de saúde por corrida
                    this.checkHealth();
                }
                this.villainAction();
            }
        },
        villainAction() {
            const actions = ['attack', 'defend', 'usePotion', 'run'];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            this[randomAction](false);
        },
        checkHealth() {
            if (this.hero.health > 100) {
                this.hero.health = 100; // Heroi saúde não pode exceder 100%
            } else if (this.hero.health < 0) {
                this.hero.health = 0; // Heroi saúde não pode ser inferior a 0%
            }
            if (this.villain.health > 100) {
                this.villain.health = 100; // Vilão health cannot exceed 100%
            } else if (this.villain.health < 0) {
                this.villain.health = 0; // Vilão saúde não pode ser inferior a 0%
            }
        }
    }
}).mount("#app");