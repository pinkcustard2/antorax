var Quests = {
	eaglecrestLoggingCamp: [
		{
			id: 0,
			quest: "To the Logging Camp",
			questArea: "eaglecrestLoggingCamp", // name of the array this is contained in
			
			startName: "Cart Driver",
			startChat: `That's it, we're here! I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> from here. If you walk down a bit to the west you should see the entrance to the camp.<br>You should probably buy a weapon on your way there. It looks like you have enough gold on you to do so. There's a good weaponsmith on your way to the camp, not far from here.`,
			
			finishName: "Marshall Teper",
			finishChat: `Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.<br>Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers. Feel free to have a look around the camp and buy anything you want, but not for too long. We've got work to be done.`,
			
			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to the Cart Driver.",
			levelRequirement: 1,
			questRequirements: [],
			
			rewards: {
				xp: 10,
				items: [
					Items.currency[2],
					Items.boots[2],
				],
				itemQuantities: [
					5,
					1,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			onQuestStart: function() {
				Player.unlockedTabs.push("quests");
				document.getElementById("changeQuests").style.display = "block";
				document.getElementById("questsImage").hidden = false;
				Dom.changeBook(Dom.previous, true);
				Dom.adventure.addInstruction(2);
			},
		},
		
		{
			id: 1,
			quest: "Learning from the Best",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Mashall Teper",
			startChat: `You're going to need to learn how to fight if you're going to be able to help us gather some wood - there are goblins out there.<br>Go and see <strong>Combat Trainer Saral</strong>. She's more skilled in combat than anyone else here. She'll be able to teach you what you need to know.`,
			
			finishName: "Combat Trainer Saral",
			finishChat: `Why hello, ${Player.name}. I always love new blood in the Logging Camp. Now let's get started, shall we?`,
			
			objectives: [
				"Equip your weapon in the inventory.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.inventory.weapon[0].type === "bow" || Player.inventory.weapon[0].type === "staff" || Player.inventory.weapon[0].type === "sword");
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			
			rewards: {
				xp: 10,
			},
			
			onQuestStart: function() {
				Player.unlockedTabs.push("inventory");
				document.getElementById("changeInventory").style.display = "block";
				document.getElementById("inventoryImage").hidden = false;
				Dom.changeBook(Dom.previous, true);
				Dom.adventure.addInstruction(5);
			},
		},
		
		{
			id: 2,
			quest: "Combat Training",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Combat Trainer Saral",
			startChat: `${Player.name}, I'd like for you to deal some damage to this <strong>Training Dummy</strong>. 20 should suffice. <br>You can find out more about how you can attack in your <strong>adventure log</strong>.`,
			
			finishName: "Combat Trainer Saral",
			finishChat: `Well done. It's inspiring to watch a new adventurer learn their ways - I look forward to seeing more of you in the future. I imagine <strong>Marshall Teper</strong> would like for you to get to work with him now.`,
			
			objectives: [
				"Deal at least 20 damage to the <strong>Training Dummy</strong>.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(typeof Game.dummies !== "undefined" && checkProgress(Game.dummies[0].damageTaken, 20)); // quest must be finished in Eaglecrest Logging Camp, hence Game.dummies[0] is always the right dummy
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Combat Trainer Saral</strong>.",
			levelRequirement: 1,
			questRequirements: ["Learning from the Best"],
			
			rewards: {
				xp: 20,
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
		},
		
		{
			id: 3,
			quest: "Retrieval of Logs",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Marshall Teper",
			startChat: `You looked good enough at the training dummy to go out to <strong>The Nilbog</strong>. It's the camp of some goblins, but trust me - they're not much stronger than that dummy you just fought.<br>They recently invaded our camp in huge numbers, and managed to steal some logs of wood whilst we were fighting them off. Head east to <strong>The Nilbog</strong> and retrieve some wood from them, and return it to me.<br>This <strong>Logging Sack</strong> might be useful for you to hold the logs in, as well as any other items you might want to hold but don't have space for.`,
			
			finishName: "Marshall Teper",
			finishChat: `Good. Now we need to make sure that a goblin attack like this won't happen again.`,
			
			objectives: [
				"Retrieve 4 logs from The Nilbog. <em>(press space when standing on one to pick it up)</em>",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(2, "item"), 4));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Combat Training"],
			
			startRewards: {
				items: [
					Items.bag[2],
				],
				itemQuantities: [
					1,
				],
			},
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				Items.item[2], // logs
			],
			removeItemQuantity: [
				4,
			],
			
			onQuestFinish: function() {
				Player.unlockedTabs.push("reputation");
				document.getElementById("changeReputation").style.display = "block";
				document.getElementById("reputationImage").hidden = false;
			}
		},
		{
			id: 4,
			quest: "More Logs",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Marshall Teper",
			startChat: `There's still more logs out there in The Nilbog. We need to retrieve some more.`,
			
			finishName: "Marshall Teper",
			finishChat: `Good. Come back tomorrow and we can retrieve some more.`,
			
			objectives: [
				"Retrieve 4 logs from The Nilbog.",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(2, "item"), 4));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			repeatTime: "daily",
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				Items.item[2], // logs
			],
			removeItemQuantity: [
				4,
			],
		},
		
		{
			id: 5,
			quest: "Making Yourself Useful",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Marshall Teper",
			startChat: `There's lots going on around the logging camp at the moment, especially after the goblin attack. Speak to some people in the camp and see if there's anyone that could use your help.`,
			
			finishName: "Marshall Teper",
			finishChat: `You made quick work of that. I believe it is time for you to head to Eaglecrest soon, but first we need to get to the root of this goblin problem.`,
			
			objectives: [
				"Help 3 people around the Logging Camp.",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				let peopleHelped = 0; // count number of people that the player has helped
				if (Player.quests.completedQuestArray.includes("First Class Recovery")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Strengthening Defences")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("The Sceptre of Souls")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Another Man's Treasure")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Fire Power")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Potion Making")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("A Lost Fishing Rod")) { peopleHelped++; }
				completed.push(Dom.inventory.check(peopleHelped, 3));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 50,
				items: [
					Items.currency[2],
					Items.chest[4],
				],
				itemQuantities: [
					5,
					1,
				],
				reputation: {
					eaglecrestLoggingCamp: 100,
				},
			},
		},
		
		{
			id: 6,
			quest: "First Class Recovery",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Eaglecrest Mailman",
			startChat: `Oh no - I was driving my mail cart through that boggy area to the east and came across a huge group of goblins! I had to abandon the cart and flee for my life, but I left a mail sack in the cart. Please, would you be able to try to find my missing mail sack?`,
			
			finishName: "Eaglecrest Mailman",
			finishChat: `Phew, I was so worried. It's a shame about the cart though...`,
			
			objectives: [
				"Find a mail sack inside the mail cart at the Nilbog.",
				"Speak to the <strong>Eaglecrest Mailman</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(6, "item", 1));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to the <strong>Eaglecrest Mailman</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestCity: 20,
				},
			},
			
			removeItems: [
				Items.item[6], // mail sack
			],
			removeItemQuantity: [
				1,
			],
		},
		
		{
			id: 7,
			quest: "A Lost Fishing Rod",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Fisherman Tobenam",
			startChat: "You! You look like you've been to see the goblins! One of my fav'rite fishing rods has been stolen from me, and I think it was one of those goblins, heheh! Would you be able to head down to them and see if you can find it? I'll happily give you a couple o' lessons on fishing if you're able to get your hands on it.",
			
			finishName: "Fisherman Tobenam",
			finishChat: "You found it! Heheh, let me clean it for you. You can keep it for your fishing lessons with me. I've plenty of other rods I can be using. Now, let me teach you... the way of the water! Heheheh.",
			
			objectives: [
				"Find <strong>Fisherman Tobenam's</strong> fishing rod. He thinks it has been taken by a goblin.",
				"Return to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push((Dom.inventory.check(7, "item", 1)) ? true : false);
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fishers' Valley.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 20,
				items: [
					Items.rod[2],
				],
				itemQuantities: [
					1,
				],
			},
			
			removeItems: [
				Items.item[7], // Tobenam's Lost Fishing Rod (cleaned version given in its place)
			],
			removeItemQuantity: [
				1,
			],
		},
		
		{
			id: 8,
			quest: "Learning to Fish I",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Fisherman Tobenam",
			startChat: "Heheh, you can't always fish up a fish right away, but you can always fish up some driftwood! Take a fish and see what you're gettin', heh.",
			
			finishName: "Fisherman Tobenam",
			finishChat: "Heheh, you'll slowly improve at fishing the more you do it.",
			
			objectives: [
				"Fish something up!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.stats.fishingSkill > 0);
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 1,
			questRequirements: ["A Lost Fishing Rod"],
			
			rewards: {
				xp: 20,
			},
		},
		
		{
			id: 9,
			quest: "Learning to Fish II",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Fisherman Tobenam",
			startChat: "What better way to get a fish than to use some bait? Buy a <strong>Can of Worms</strong> from me, and try your luck, heheh.",
			
			finishName: "Fisherman Tobenam",
			finishChat: "Heheh, your first catch! You'll be good as me in no time...",
			
			objectives: [
				"Buy a can of worms from Fisherman Tobenam and use it.",
				"Catch your first fish!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.hasUsedBait || false);
				completed.push(Player.quests.questProgress.hasCaughtFish || false);
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 1,
			questRequirements: ["Learning to Fish I"],
			
			rewards: {
				xp: 20,
			},
		},
		
		{
			id: 10,
			quest: "Learning to Fish III",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Fisherman Tobenam",
			startChat: "What did I say, you can't get fish all the time without practising! Keep fishing until your skill is level 10... your effort now will be made up for later, heheh.",
			
			finishName: "Fisherman Tobenam",
			finishChat: "Wow, well done! You're now a fishing master, heheh, almost. Come back to me every day and I'll give you something to do, heheh.",
			
			objectives: [
				"Level your base fishing skill to 10.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.stats.fishingSkill >= 10 ? true : " ("+Player.stats.fishingSkill+"/10)");
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 1,
			questRequirements: ["Learning to Fish II"],
			
			rewards: {
				xp: 50,
			},
		},
		
		{
			id: 11,
			quest: "Strengthening Defences",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Galuthel the Trap Mechanic",
			startChat: `Welcome to the logging camp, adventurer. I hope Teper hasn't been too harsh to you. Since the goblin attack, we've been investing in ways to stop something like it happening again. My traps are some of the best technology this area has to offer to stop those goblins.<br>Help me by taking some traps and place them around in the Nilbog. 3 should suffice. They won't arm right away, but when they do there's sure to be a huge impact.`,
			
			finishName: "Galuthel the Trap Mechanic",
			finishChat: `Excellent. You can always come back later if you have a bit of spare time. I'd appreciate your help.`,
			
			objectives: [
				"Place 3 goblin traps around The Nilbog. <em>(click on one to place it)</em>",
				"Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinTrapsPlaced, 3));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				// remove all traps
			],
			removeItemQuantity: [
				// remove all traps
			],
		},
		{
			id: 12,
			quest: "Reinforcing Defences",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Galuthel the Trap Mechanic",
			startChat: `If you have some time, I need 3 more traps placed around The Nilbog. We can't let those goblins attack us again!`,
			
			finishName: "Galuthel the Trap Mechanic",
			finishChat: `Thank you. Same time tomorrow?`,
			
			objectives: [
				"Place 3 goblin traps around The Nilbog. <em>(click on one to place it)</em>",
				"Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinTrapsPlaced, 3));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			levelRequirement: 4,
			questRequirements: ["Strengthening Defences"],
			repeatTime: "daily",
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				// remove all traps
			],
			removeItemQuantity: [
				// remove all traps
			],
			
			resetVariables: [
				"goblinTrapsPlaced",
			],
		},
		
		{
			id: 13,
			quest: "The Sceptre of Souls",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Soul Healer Nalaa",
			startChat: `My blessings to you. My sceptre is running low on soul essence, a sacred power contained in the corpses of those who have recently died. I use it to remove XP fatigue from those who have died, here at the logging camp. I am not well equipped to go out to collect this essence, however I believe that you are. May you restore my scepter's power?`,
			
			finishName: "Soul Healer Nalaa",
			finishChat: `Thank you. It is people like you that allow the Logging Camp to flourish.`,
			
			objectives: [
				"Use the sceptre of souls near 5 corpses to restore its power. <em>(click on it to use it)</em>",
				"Speak to <strong>Soul Healer Nalaa</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.soulSceptreEnergy, 5));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Soul Healer Nalaa</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			startRewards: {
				items: [
					Items.item[8], // soul sceptre
				],
				itemQuantities: [
					1,
				],
			},
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				Items.item[8], // remove soul sceptre
			],
			removeItemQuantity: [
				1,
			],
		},
		
		{
			id: 14,
			quest: "Partners in Goblin Destruction",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Goblin Torch",
			startChat: `<em>The torch speaks to you with a coarse whisper.</em><br>Please help. Goblins used wrong spell. On me. I can think. And speak. Other torches. Can not.<br>I hate goblins. As much as you. Please. Give me. A lift? We can kill. Together.`,
			
			finishName: "Goblin Torch",
			finishChat: `Thank you. That was the. Best time of my life.`,
			
			objectives: [
				"Kill 10 goblins with the help of the goblin torch.",
				"Place the torch back at the goblin camp.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinsKilledWithTorch, 10));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "???",
			levelRequirement: 3,
			questRequirements: [],
			
			autofinish: true,
			
			startRewards: {
				items: [
					Items.staff[7], // goblin torch
				],
				itemQuantities: [
					1,
				],
			},
			
			onQuestStart: function() {
				Game.NPCs.splice(0, 1); // remove goblin torch NPC from the map
			},
			
			rewards: {
				xp: 50,
			},
			
			removeItems: [
				Items.staff[7], // remove goblin torch
			],
			removeItemQuantity: [
				1,
			],
			
			onQuestFinish: function() {
				if (Game.areaName === "nilbog") {
					Game.NPCs.push(new NPC(Areas.nilbog.NPCs[0])); // add goblin torch image to the map
				}
			},
		},
		
		{
			id: 15,
			quest: "Another Man's Treasure",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Item Buyer Noledar",
			startChat: `Hello. I've been working on my latest achievement and need some assistance if you wouldn't mind. I need to collect 8 <strong>Scraps of Cloth</strong> and 8 <strong>Polished Rocks</strong> from the goblins in <strong>The Nilbog</strong>, but I've heard it's dangerous out there and don't want to leave my cart unattended. Is there any chance you could head down there to help me? I've heard you're good around the goblins.`,
			
			finishName: "Item Buyer Noledar",
			finishChat: `Thank you so much! Now, I just need to find some space in my cart...`,
			
			objectives: [
				"Obtain 8 <strong>Scraps of Cloth</strong> from goblins.",
				"Obtain 8 <strong>Polished Rocks</strong> from goblins.",
				"Speak to <strong>Item Buyer Noledar</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(3, "item"), 8));
				completed.push(checkProgress(Dom.inventory.check(4, "item"), 8));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Item Buyer Noledar</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				Items.item[3], // scrap of cloth
				Items.item[4], // polished rock
			],
			removeItemQuantity: [
				8,
				8,
			],
		},
		
		{
			id: 16,
			quest: "Fire Power",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Identifier Gilas",
			startChat: `As part of my research, I have been looking into what makes the <strong>fire goblin</strong> so much stronger than the other goblins. You might have seen one at the <strong>north</strong> of <strong>The Nilbog</strong>. I believe their strength is down to <strong>Fiery Rocks</strong>, which would have been sourced from the <strong>Nilbog Tower</strong>. They are potentially very strong forms of magic, but not that the goblins would know how to use them to their full potential!<br><br>Please, find one of these rocks from a fire goblin and return it to me. It will be very useful in my research.`,
			
			finishName: "Identifier Gilas",
			finishChat: `Thank you. This will be very useful for my research.`,
			
			objectives: [
				"Obtain a <strong>Fiery Rock</strong> from a <strong>Fire Goblin</strong>.",
				"Speak to <strong>Identifier Gilas</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(5, "item", 1));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Identifier Gilas</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					3,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
			
			removeItems: [
				Items.item[5], // scrap of cloth
			],
			removeItemQuantity: [
				1,
			],
		},
		
		{
			id: 17,
			quest: "Potion Making",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Ciarra Darkbrew",
			startChat: `It's important that we potion merchants experiment with our wares. You wouldn't want to feel to safe as a customer, would you? Gather some potion ingredients for me and let's see what we can brew up.`,
			
			finishName: "Ciarra Darkbrew",
			finishChat: `Interesting. Let's see how this goes.`,
			
			onQuestFinish: function () {
				Game.sayChat("Ciarra Darkbrew", "Stand back. We wouldn't want your arms to detatch so soon.", false, 1000, true);
				Game.sayChat("Ciarra Darkbrew", "/me adds the potion ingredients to an inert vial.", false, 4000, true);
				Dom.chat.insert("The vial fizzes rapidly.", 6500, true);
				Dom.chat.insert("The vial explodes.", 8500, true);
				setTimeout(function () {
					// damage Ciarra
					if (Game.areaName === "eaglecrestLoggingCamp") {
						Game.NPCs.find(NPC => NPC.name === "Ciarra Darkbrew").takeDamage(100)
					}
				}, 8600);
				Game.sayChat("Ciarra Darkbrew", "That... didn't go as planned.", false, 9500, true);
			},
			
			objectives: [
				"Gather 2 goblin eyes.",
				"Fill up a bucket with mud from The Nilbog.",
				"Obtain a vial of goblin blood. You might be able to ask a nearby NPC for one.",
				"Speak to <strong>Ciarra Darkbrew</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(10, "item"), 2));
				completed.push(Dom.inventory.check(13, "item", 1));
				completed.push(Dom.inventory.check(11, "item", 1));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Ciarra Darkbrew</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			startRewards: {
				items: [
					Items.item[12],
				],
				itemQuantities: [
					1,
				],
			},
			
			removeItems: [
				Items.item[10], // goblin eye
				Items.item[13], // bucket of Nilbog mud
				Items.item[11], // vial of goblin blood
			],
			removeItemQuantity: [
				2,
				1,
				1,
			],
			
			rewards: {
				xp: 50,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					2,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
		},
		
		{
			id: 18,
			quest: "Potion Making II",
			questArea: "eaglecrestLoggingCamp",
			
			startName: "Ciarra Darkbrew",
			startChat: `Let's try again. Perhaps adding Nilbog mud wasn't a good idea. To stop such a violent reaction, <strong>direweed</strong> should be added. If you know how to fish, you can catch it from nearby waters.`,
			
			finishName: "Ciarra Darkbrew",
			finishChat: `Try two. Stand back; you wouldn't want to die <em>such</em> a horrible death.`,
			
			onQuestFinish: function () {
				Game.sayChat("Ciarra Darkbrew", "/me adds the potion ingredients to an inert vial.", false, 1500, true);
				Dom.chat.insert("The vial fizzes rapidly.", 4000, true);
				Dom.chat.insert("The vial simmers to produce a <COLOUR>-coloured liquid.", 6000, true);
				Game.sayChat("Ciarra Darkbrew", "Excellent. If you'd like to try the potion, you can some from me. I promise it won't kill you. Probably.", false, 8000, true);
			},
			
			objectives: [
				"Gather 2 more goblin eyes.",
				"Fish up 1 direweed.",
				"Obtain another vial of goblin blood.",
				"Speak to <strong>Ciarra Darkbrew</strong>.",
			],
			
			isCompleted: function() {
				let completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(10, "item"), 2));
				completed.push(Dom.inventory.check(28, "item", 1));
				completed.push(Dom.inventory.check(11, "item", 1));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Ciarra Darkbrew</strong>.",
			levelRequirement: 1,
			questRequirements: ["Potion Making"],
			
			removeItems: [
				Items.item[10], // goblin eye
				Items.fish[28], // direweed
				Items.item[11], // vial of goblin blood
			],
			removeItemQuantity: [
				2,
				1,
				1,
			],
			
			rewards: {
				xp: 50,
				items: [
					Items.currency[2],
				],
				itemQuantities: [
					3,
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
		},
		
		/*{
			id: 2,
			quest: "A drink on us!",
			
			startName: "Gregor Goldenbrew",
			startChat: "I 'aven't seen you round 'ere before! Hehe, enjoy a drink by the hearth - free on us!",
			
			objectives: [
				"Take a sip from your wood-brewed beer around the hearth.",
			],
			
			howToStart: "Speak to Gregor Goldenbrew in the Treefeller's Tavern.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			
			rewards: {
				xp: 25,
			},
			
			onQuestStart: function() {
				Dom.chat.insert("Gregor brews you an extra large beer. Try not to get too tipsy!", 100);
				// give the player a brew
			},
		},
		
		*/
	],
	
	fishing: [
		{
			id: 0,
			quest: "A Big Catch",
			questArea: "fishing",
			
			startName: "Fisherman Tobenam",
			startChat: `How's your fishing going? Reel up 15 items and we'll see, heheh.`,
			
			finishName: "Fisherman Tobenam",
			finishChat: `Not bad, heheh. I'm glad I taught you how to fish now!`,
			
			objectives: [
				"Fish up 15 items.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.itemsFishedUp, 15));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to Fisherman Tobenam.",
			levelRequirement: 1,
			questRequirements: ["Learning to Fish III"],
			repeatTime: "daily",
			
			rewards: {
				xp: 50,
				items: [
					Items.currency[3], // fishing seal
				],
				itemQuantities: [
					1,
				],
			},
			
			resetVariables: [
				"itemsFishedUp",
			],
		},
	],
};

// check if all of the contents of the array are true
// adds the last value to the completed array
function checkFinished (completed) {
	let finished = true;
	for (let i = 0; i < completed.length; i++) {
		if (completed[i] !== true) {
			finished = false;
		}
	}
	completed.push(finished);
	return completed;
}

// return a string that contains the progress for a countable objectives
// currentProgress and requiredProgress should be countable values (currentProgress can be undefined though)
// either false, true, or (x/y)
function checkProgress (currentProgress, requiredProgress) {
	if (currentProgress === undefined || currentProgress === 0) {
		return false;
	}
	else if (currentProgress >= requiredProgress) {
		return true;
	}
	else {
		return "(" + currentProgress + "/" + requiredProgress + ")";
	}
}