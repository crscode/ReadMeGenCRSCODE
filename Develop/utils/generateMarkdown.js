function generateMarkdown(data) {
  return `

  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/crscode/ReadMeGenCRSCODE)

# ${data.title}


## ${data.description}


## ${data.table}

http://github.com - automatic!
[${data.github}](http://github.com)


## ${data.instructions}

## ${data.license}

## ${data.installation}



`;
}

module.exports = generateMarkdown;
