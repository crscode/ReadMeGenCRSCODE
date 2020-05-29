function generateMarkdown(data) {
  return `

  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/crscode/ReadMeGenCRSCODE)

# **Title**  
___

## ${data.title}

___

# **Description** 

___

## ${data.description}

___

# **TABLE OF CONTENTS**

___

1. [Title](#Title)

2. [GitHub](#GitHub)

3. [Description](#Description)

4. [Instructions](#Instructions)

5. [License](#License)
    

## ${data.table}

___

# **GITHUB** 

___

![GitHub Logo](https://avatars1.githubusercontent.com/u/61256280?s=100&u=c460043d70fe800acef72249137a91ac764f57e3&v=4)



[${data.github}](http://github.com/${data.github})



___

# **INSTRUCTIONS**

___
## ${data.instructions}

___

# **LICENSE**

___
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ${data.license}

___

# **INSTALLATION**

___

## ${data.installation}



`;
}

module.exports = generateMarkdown;
