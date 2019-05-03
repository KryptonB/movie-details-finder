# Movie Details Finder  

![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/kryptonb/movie-details-finder.svg)
[![GitHub](https://img.shields.io/github/license/kryptonb/movie-details-finder.svg?style=popout)](https://choosealicense.com/licenses/mit/)

Movie Details Finder is a simple web app that pulls movie or TV show details when you enter the title (and year if you want to be more specific). It uses [OMDb API](http://www.omdbapi.com/) to retrieve these details.  
  
You can access a demo at: https://kryptonb.github.io/movie-details-finder/  

![Movie details](https://github.com/KryptonB/movie-details-finder/blob/master/screenshots/result.PNG)

## Installation
* Download the docs folder and open [index.html](index.html) file in a browser
* Remove the api key in [custom.js](js/custom.js) at line 7 and put your own key

## Requirements
* OMDb API key ([Register for a key](http://www.omdbapi.com/apikey.aspx))
* Google Chrome web browser (JavaScript enabled)
* Internet connection with a reasonable speed

## Usage
* Enter movie/TV show title you want to look up and click Submit button
* Click the Clear button to clear the textbox fields

## Built With
* [HTML5](https://en.wikipedia.org/wiki/HTML5) - Basic markup
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Basic styling
* [Bootstrap 4.1.1](https://getbootstrap.com/) - Responsive framework
* [jQuery 3.3.1](https://jquery.com/) - JS framework

## Acknowledgments
* Uses the [OMDb API](http://www.omdbapi.com/)
* Inspired by Brad Traversy's GitHub finder

## TODO
* Add plot size option
* Format ratings sections
