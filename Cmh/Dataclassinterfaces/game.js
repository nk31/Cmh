﻿// ##### CREATE A NEW GAME #####//var newGame = new ds.Game();//newGame.name = 'Testspiel ' + newGame.ID;//newGame.period = 1;//newGame.createdBy = '8E67E86F89464024972B62530BB695DF';//newGame.modifiedBy = '8E67E86F89464024972B62530BB695DF';//newGame.viewedBy = '8E67E86F89464024972B62530BB695DF';//newGame.firstGameHost = '8E67E86F89464024972B62530BB695DF';//newGame.save();//newGame;// ##### FIND A GAME #####//var game = ds.Game.find("name == Testspiel 3");//var game = ds.Game(23); // Find by key//game.firstGameHost = '8E67E86F89464024972B62530BB695DF';//game.save();//game;// ##### QUERY GAMES #####//var games = ds.Game.query('name == "Testspiel*"');//var games = ds.Game.query('status === "beendet"');//var games = ds.Game.query('status == null');//var games = ds.Game.query('status == ""');//var games = ds.Game.query('status == null || status == ""');//var game = ds.Game(2); // Find by key//var game = ds.Game.query('createdBy.ID == :1  || gamer.game.ID == :1', 'B5271231609340F9BAC3ADE6960D4975');//game;	//// Get an entityCollection of all games the user has created and add it to the newGameEntityCollection//var gameOwners = ds.Game.query('createdBy.ID == :1','B5271231609340F9BAC3ADE6960D4975'); // Query all the games the user has created//newGameEntityCollection.add(gameOwners); // Add the entity collection to the newGameEntityCollection//			//// Get an entityCollection of all games the user has participated as gamer//var gamerGames = ds.Game.query('gamer.user.ID == :1', 'B5271231609340F9BAC3ADE6960D4975');//newGameEntityCollection.add(gamerGames); // Add the entity collection to the newGameEntityCollection//			//// Return the entity collection newGameEntityCollection//newGameEntityCollection;//var games = ds.Game.query("gamer.user.ID = :1", 'B5271231609340F9BAC3ADE6960D4975');//games;//var newGameEntityCollection = ds.Game.createEntityCollection();//var gameOwners = ds.Game.query('createdBy.ID == :1','1D33940BEB0A4671923EE590B91EFE08');//newGameEntityCollection.add(gameOwners);//var gameGamers = ds.Gamer.query('user.ID == :1', '1D33940BEB0A4671923EE590B91EFE08')//var gamerGamers = gameGamers.game;//newGameEntityCollection.add(gamerGamers);//newGameEntityCollection;//gameGamers;// ##### REMOVE A Game #####//var game = ds.Game(23);//game.period = game.period;//game.save();//game.remove();// ##### REMOVE ALL GAMERS #####//ds.Game.all().remove();// ##### SHOW ALL GAMES #####ds.Game.all();