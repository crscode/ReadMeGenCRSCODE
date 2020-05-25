function generateMarkdown(data) {
  return `

  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# ${data.title}


## ${data.description}


## ${data.table}

http://github.com - automatic!
[${data.github}](http://github.com)


## ${data.title}



`;
}

module.exports = generateMarkdown;
