var movies = [
		{
			id: 'Jurassic World',
			name: 'Jurassic World',
			image: './Images/jurassic_world.jpeg',
			starring: 'Cris Pratt',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Jurassic_World'
		},{
			id: 'BATMAN',
			name: 'BATMAN',
			image: './Images/Batman.jpg',
			starring: 'Christian Bale',
			synopsis: 'Action/Suspence',
			wiki: 'https://en.wikipedia.org/wiki/Batman'
		},{
			id: 'JOKER',
			name: 'JOKER',
			image: './Images/joker.jpg',
			starring: 'Joaquin Phoenix',
			synopsis: 'psychological thriller',
			wiki: 'https://en.wikipedia.org/wiki/Joker_(2019_film)'
		},{
			id: 'Interstellar',
			name: 'Interstellar',
			image: './Images/Interstellar.jpg',
			starring: 'Matthew McConaughey',
			synopsis: 'Science-Fiction',
			wiki: 'https://en.wikipedia.org/wiki/Interstellar_(film)'
		},{
			id: 'Parasite',
			name: 'Parasite',
			image: './Images/parasite.jpg',
			starring: 'Song Kang-ho',
			synopsis: 'Comedy/Triller',
			wiki: 'https://en.wikipedia.org/wiki/Parasite_(2019_film)'
		},{
			id: 'Wonder women',
			name: 'Wonder women',
			image: './Images/wonderwomen.jpg',
			starring: 'Gal Gadot',
			synopsis: 'Action/Thriller',
			wiki: 'https://en.wikipedia.org/wiki/Wonder_Woman_(2017_film)'
		}
		];
	
	var moviesMap = {};
	for(ix = 0 ; ix < movies.length; ix++){
		moviesMap[movies[ix].id] = movies[ix];
	}
	var userWishlist = [];
	
	var movieNameDefaultSize = '1.5vw';
	var movieNameExpandSize = '2.5vw';
	
	function createMoviesStrip(){
		for(x=0; x < movies.length; x++) {
			var divMovieStripObject = document.createElement('div');
			divMovieStripObject.setAttribute('class', "divMovieStripObject");
			divMovieStripObject.setAttribute('onclick', "expand(this)");
			divMovieStripObject.setAttribute('id', "PDIV_".concat(movies[x].id));
			divMovieStripObject.style.backgroundImage = "url('".concat(movies[x].image).concat("')");
			
			var h1MovieName = document.createElement('h1');
			h1MovieName.setAttribute('class', "h1MovieName");
			h1MovieName.setAttribute('id', "HMNAME_".concat(movies[x].id));
			h1MovieName.setAttribute('font-size', movieNameDefaultSize);
			var text1 = document.createTextNode(movies[x].name);
			h1MovieName.appendChild(text1);
			
			var imgWishlistCheck = document.createElement('img');
			imgWishlistCheck.setAttribute('src', 'Images/wishlist.jpg');
			imgWishlistCheck.setAttribute('class', "imgWishlistCheck");
			imgWishlistCheck.setAttribute('width', "75");
			imgWishlistCheck.setAttribute('height', "75");
			imgWishlistCheck.setAttribute('id', "WISHLIST_".concat(movies[x].id));
			
			var divMovieInfo = document.createElement('div');
			divMovieInfo.setAttribute('class', "divMovieInfo");
			divMovieInfo.setAttribute('id', "CDIV_".concat(movies[x].id));
				var h2Info = document.createElement('h2');
				h2Info.setAttribute('class', "h2Info");
					var italics = document.createElement('i');
						var text2 = document.createTextNode('Info');
					italics.appendChild(text2);
				h2Info.appendChild(italics);
				var buttonWishlist = document.createElement('button');
				buttonWishlist.setAttribute('type', "button");
				buttonWishlist.setAttribute('class', "buttonWishlist");
				buttonWishlist.setAttribute('onclick', "wishlist(this)");
				buttonWishlist.setAttribute('id', "BUTTON_".concat(movies[x].id));
					var text3 = document.createTextNode('Wishlist');
				buttonWishlist.appendChild(text3);
				var br = document.createElement('br');
				var tableInfo = document.createElement('table');
				tableInfo.setAttribute('class', "tableInfo");
					var tr1 = document.createElement('tr');
						var td1tr1 = document.createElement('td');
						td1tr1.setAttribute('class', "tdLabel");
							var text4 = document.createTextNode('Starring');
						td1tr1.appendChild(text4);
						
						var td2tr1 = document.createElement('td');
						td2tr1.setAttribute('class', "tdValue");
							var text5 = document.createTextNode(movies[x].starring);
						td2tr1.appendChild(text5);
						
					tr1.appendChild(td1tr1);
					tr1.appendChild(td2tr1);
					var tr2 = document.createElement('tr');
						var td1tr2 = document.createElement('td');
						td1tr2.setAttribute('class', "tdLabel");
							var text6 = document.createTextNode('Synopsis');
						td1tr2.appendChild(text6);
						
						var td2tr2 = document.createElement('td');
						td2tr2.setAttribute('class', "tdValue");
							var text7 = document.createTextNode(movies[x].synopsis);
						td2tr2.appendChild(text7);
					tr2.appendChild(td1tr2);
					tr2.appendChild(td2tr2);
				tableInfo.appendChild(tr1);
				tableInfo.appendChild(tr2);
				var spanHyperLink = document.createElement('span');
				spanHyperLink.setAttribute('class', "spanHyperLink");
					var anchorMovieWiki = document.createElement('a');
					anchorMovieWiki.setAttribute('href', movies[x].wiki);
					anchorMovieWiki.setAttribute('target', "_blank");
					anchorMovieWiki.setAttribute('rel', "noopener noreferrer");
					anchorMovieWiki.setAttribute('class', "anchorMovieWiki");
						var text8 = document.createTextNode('Wiki');
					anchorMovieWiki.appendChild(text8);
				spanHyperLink.appendChild(anchorMovieWiki);
			divMovieInfo.appendChild(h2Info);
			divMovieInfo.appendChild(buttonWishlist);
			divMovieInfo.appendChild(br);
			divMovieInfo.appendChild(tableInfo);
			divMovieInfo.appendChild(spanHyperLink);			
			
			divMovieStripObject.appendChild(h1MovieName);
			divMovieStripObject.appendChild(imgWishlistCheck);
			divMovieStripObject.appendChild(divMovieInfo);				
			
			document.getElementById('DIV_MOVIESTRIP_CONTAINER').appendChild(divMovieStripObject);
		}
	}
	
	function getIdOfElement(typeElement,referenceId){
		var i = referenceId.lastIndexOf("_");
		return typeElement.concat(referenceId.substring(i+1));
	}
	function wishlist(clickedButton){
		var elementId = getIdOfElement('WISHLIST_',clickedButton.id);
		var wishlistPng = document.getElementById(elementId);
		var movie = getIdOfElement('',clickedButton.id);
		
		if(wishlistPng.style.display == 'block'){
			var ix = userWishlist.indexOf(moviesMap[movie].name);
			if (ix > -1) {
				userWishlist.splice(ix, 1);
			}
			console.log('Removed from Wishlist: ', moviesMap[movie].name);
			console.log('Wishlist: ', userWishlist);
			wishlistPng.style.display = 'none';
		}else{
			userWishlist.push(moviesMap[movie].name);
			console.log('Wishlist: ', userWishlist);
			wishlistPng.style.display = 'block';
		}
	}
	function expand(clickeddiv){
		var elementId = getIdOfElement('CDIV_',clickeddiv.id);
		var infoDiv = document.getElementById(elementId);
		elementId = getIdOfElement('HMNAME_',clickeddiv.id);
		var hMovieName = document.getElementById(elementId);

		if(clickeddiv.style.width == '40%'){
			clickeddiv.style.width = '20%'
			infoDiv.style.display = 'none';
			hMovieName.style.top = '50%';
			hMovieName.setAttribute('font-size', movieNameDefaultSize);
		}else{
			clickeddiv.style.width = '40%'
			infoDiv.style.display = 'block';
			hMovieName.style.top = '15%';
			hMovieName.setAttribute('font-size', movieNameExpandSize);
		}
	}
	function populateInfo(callingFrom){
		if(callingFrom.id == 1){
			callingFrom.style = "width:1000px; background-color=black";
		}
	}
