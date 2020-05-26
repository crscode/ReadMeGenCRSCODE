function generateMarkdown(data) {
  return `

  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/crscode/ReadMeGenCRSCODE)

# TITLE
___

# ${data.title}

___

# Description

___

## ${data.description}

___

# TABLE OF CONTENTS

___

## ${data.table}

___

# GITHUB 

___

http://github.com - automatic!
[${data.github}](http://github.com)

___

# INSTRUCTIONS

___
## ${data.instructions}

___

# LICENSE

___

## ${data.license}

___

# INSTALLATION

___

## ${data.installation}



`;
}

module.exports = generateMarkdown;
