var subset_articles = [];

function add_forms(word_chosen, titles_array, authors_array, conferences_array, frequencies_array, pdfs_array, bibtexs_array)
{
	document.getElementById("word_clicked").value = word_chosen;
	document.getElementById("titles").value = titles_array;
	document.getElementById("authors").value = authors_array;
	document.getElementById("conferences").value = conferences_array;
	document.getElementById("frequencies").value = frequencies_array;
	document.getElementById("pdfs").value = pdfs_array;
	document.getElementById("bibtexs").value = bibtexs_array;
}

// INPUT: 'William G. J. Halfond,  Alessandro Orso'
// OUTPUT: ['William G. J. Halfond', 'Alessandro Orso']
// NOTE: Two spaces between values
function parse_authors(authors)
{
	return authors.split(';  ');
}
function word_freq(sentence, word)
{
	word = word.toLowerCase();
	var counter = 0;
	var text = sentence;
	var array = [];
	var index = -1;

	// replace is from wordfreq.worker.js
	text = text
		.replace(/\.+/g, '.') // replace multiple full stops
		.replace(/(.{3,})\.$/g, '$1') // replace single trailing stop
		.replace(/n[\'’]t\b/ig, '') // get rid of ~n't
		.replace(/[\'’](s|ll|d|ve)?\b/ig, '') // get rid of ’ and '
		.toLowerCase();

	do {
		index = text.indexOf(word, index + 1);
		if (index != -1) {
			array[counter++] = index;
			//i = index;
		}
	} while (index != -1);
	return counter;
}
function open_url(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

function open_urlTest(url) {
	return "www."+url+".com";
}

function checkHighlight(abstractArray, chosenWord) {
	for (var i=0; i<abstractArray.length; i++) {
		if (abstractArray[i].toUpperCase() == chosenWord.toUpperCase()) {
			abstractArray[i] = "<span style=color:#FFFF00>" + chosenWord + "</span> "; 
		}
	}
	return abstractArray;
}

//sets abstract box and highlights word
function setAbstract(abstractText, fullText) {
	var chosenWord = localStorage.word_chosen;
	document.getElementById("word_clicked_full_text").value = chosenWord;
	document.getElementById("fulltext_input").value = fullText;
	var abstractArray = abstractText.split(" "); 
	abstractArray = checkHighlight(abstractArray,chosenWord);
	var str = abstractArray.toString();
	document.getElementById('alert-fixer-container').innerHTML = str.replace(/,/g," ");

}

function add_remove_subset(articles)
{
	var index = -1;

	for(var i = 0; i < subset_articles.length; i++)
	{
		if(articles['doi'] == subset_articles[i]['doi'])
		{
			index = i;
			break;
		}
	}
	if(index > -1)
	{
		subset_articles.splice(index, 1);
	}
	else
	{
		subset_articles.push(articles);
	}

	localStorage.subset_articles = JSON.stringify(subset_articles);
}

function createTable(){
	var table = document.getElementById("table");
	var word_chosen = localStorage.word_chosen;
	var articles = JSON.parse(localStorage.articles);
	
	var i;

	var titles_array = [];
	var authors_array = [];
	var conferences_array = [];
	var frequencies_array = [];
	var pdfs_array = [];
	var bibtexs_array = [];

	for(i = 0; i < articles.length; i++)
	{
		if(JSON.parse(localStorage.articles)[i].frequencies == undefined){
			articles[i].frequencies = {};
		}

		var wordfreq;
		if(articles[i].frequencies[word_chosen] == undefined){
			// if word freq in article is 0, break
			wordfreq = word_freq(articles[i]['text'], word_chosen);
			articles[i].frequencies[word_chosen] = wordfreq;
			if(wordfreq == 0)
				continue;
		} else if (articles[i].frequencies[word_chosen] == 0){
			continue;
		} else {
			wordfreq = articles[i].frequencies[word_chosen];
		}

		// Adding to forms array
		titles_array.push(articles[i]['title']);
		authors_array.push(articles[i]['authors']);
		conferences_array.push(articles[i]['conference']);
		frequencies_array.push(wordfreq);
		pdfs_array.push(articles[i]['article']);
		bibtexs_array.push(articles[i]['bibtex']);

		var row = document.createElement("tr");
		row.id = "articles-row";
		table.appendChild(row);

		var article = document.createElement("td");
		var abstract = articles[i]['abstract']; 
		console.log(abstract);
		article.setAttribute("onclick","setAbstract('" + articles[i]['abstract'].replace(/'/g, "&#39;") + "', '" + articles[i]['text'].replace(/'/g, "&#39;") +"');");
		var url = document.createElement("td");
		url.setAttribute("onclick", "open_url('" + articles[i]['article'] + "');");
		var bibtex = document.createElement("td");
		bibtex.setAttribute("onclick", "open_url('" + articles[i]['bibtex'] + "');");
		//QUINN AND TAYLOR CODE
		var frequency = document.createElement("td"); 
		var authors = document.createElement("td"); 
		var conferenceName = document.createElement("td");
		var checkboxSpot = document.createElement("td");
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "shouldInclude";
		checkbox.value = "value";
		checkbox.setAttribute("onclick", "add_remove_subset(" + JSON.stringify(articles[i]) + ");");

		row.appendChild(article);
		row.appendChild(url);
		row.appendChild(bibtex);
		//QUINN AND TAYLOR CODE
		row.appendChild(frequency);
		row.appendChild(authors);
		row.appendChild(conferenceName);
		row.appendChild(checkbox);

		article.innerHTML = articles[i]['title'];
		url.innerHTML = "URL";
		bibtex.innerHTML = "bibtex";
		//QUINN AND TAYLOR CODE
		frequency.innerHTML = wordfreq;
		checkboxSpot.innerHTML = checkbox;
		authors_list = parse_authors(articles[i]['authors']);
		for(j = 0; j < authors_list.length; j++)
		{
			author_href = document.createElement("a");
			authors.appendChild(author_href);
			author_href.setAttribute("href", "Need to make word cloud href");
			author_href.innerHTML = authors_list[j];
			author_break = document.createElement("br");
			authors.appendChild(author_break);
		}
		conference_href = document.createElement("a");
		conference_href.innerHTML = articles[i]['conference'];
		conference_href.setAttribute("href", "Need to make word cloud href")
		conferenceName.appendChild(conference_href);
	}
	//move alert for abstract up!
	var topLength = articles.length*60*-1 + "px"; 
	//$('.alert-main-container').css("top",topLength);

	add_forms(word_chosen, titles_array, authors_array, conferences_array, frequencies_array, pdfs_array, bibtexs_array);

	//update localStorage articles
	localStorage.articles = JSON.stringify(articles);
}

function clearTable(){
	//remove all "td" elements
	var element = document.getElementsByTagName("td"), index;
	for (index = element.length - 1; index >= 0; index--) {
		element[index].parentNode.removeChild(element[index]);
	}element = document.getElementsByName("shouldInclude")
	for (index = element.length - 1; index >= 0; index--) {
		element[index].parentNode.removeChild(element[index]);
	}
	var articlesRow = document.getElementById("articles-row");
	articlesRow.parentNode.removeChild(articlesRow);
}

function toggle(key){
	//alert(key);
	if(window.sortOrders[key] === null){
		window.sortOrders[key] = sortEnum.ASCENDING; //default to ascending
	} else if(window.sortOrders[key] === sortEnum.ASCENDING){
		window.sortOrders[key] = sortEnum.DESCENDING; //toggle
	} else {
		window.sortOrders[key] = sortEnum.ASCENDING; //toggle
	}
	return window.sortOrders[key];
}

function sortRows(key){
	clearTable(); //clear old table
	//console.log(JSON.parse(localStorage.articles))
	var order = toggle(key); //toggle to ascending or descending
	var articles = sort(JSON.parse(localStorage.articles), key, order);
	localStorage.articles = JSON.stringify(articles);
	createTable();
	console.log(JSON.parse(localStorage.articles))
}

function getProgressWidth(width) {
	if (width == 100) return 0; 
	else return width+1; 
}

function checkHighlightPDF(text, chosenWord) {
	if (text.length == 0) return [];
	var testArray = text.split(" ");
	for (var i=0; i<testArray.length; i++) {
		if (testArray[i].toUpperCase() == chosenWord.toUpperCase()) {
			testArray[i] = "yellow"+testArray[i];
		}
		else {
			testArray[i] = "white"+testArray[i];
		}
	}
	return testArray; 
}
function searchTest(data){
	var json_data = JSON.parse(data);
	if(json_data.length == 0)
	{
		alert("Author not found");
		return;
	}
	//console.log(json_data[0]['authors'] + " " + json_data.length)
	var raw_words_from_doc = "";
	for(var i = 0; i < json_data.length; i++)
	{
		raw_words_from_doc += json_data[i]['text'];
	}
}