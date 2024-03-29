#!/usr/bin/env bash

#
# 5712b140b4c0b23601b0ad48ec033d79
# webapp
# jq
# v1
# aloo20
# 2021-04-07 13:48:38
# v4.0.0 (2019-03-05)
#
# Generated 2021-04-07 15:48:38 by dbwebb lab-utility v4.0.0 (2019-03-05).
# https://github.com/dbwebb-se/lab
#

export ANSWER
. .dbwebb.bash
echo "${PROMPT}Ready to begin."



# ==========================================================================
# jq 
# 
# A lab where we use jq to filter a large JSON file.
#

# --------------------------------------------------------------------------
# Section 1. jq 
# 
# Work with the command `jq` to filter JSON from the file tag-dbwebb.json.
#
# To answer the questions, use the following structure:
# `ANSWER = $(jq 'keys' tag-dbwebb.json)`.
#

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.1 (1 points) 
# 
# Find the `keys` of the file `tag-dbwebb.json`.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq 'keys' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.1" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.2 (1 points) 
# 
# What is the value of `meta.code`?
#
# `meta.code` is the status code of the HTTP request.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '200' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.2" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.3 (1 points) 
# 
# The file contains a link to the next results, the so called `pagination`.
# Show the link to the paginated results (next_url).
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.pagination.next_url' tag-dbwebb.json)
# I will now test your answer - change false to true to get a hint.
assertEqual "1.3" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.4 (1 points) 
# 
# How many likes do the 10th image have?
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.data[9].likes.count' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.4" true

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.5 (1 points) 
# 
# Which tags do the do the first image have?
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq .data[1].tags tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.5" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.6 (1 points) 
# 
# Who uploaded the first image? Answer with all the information about the
# uploader.
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER="Replace this text with the variable holding the answer."

# I will now test your answer - change false to true to get a hint.
assertEqual "1.6" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.7 (1 points) 
# 
# The first image is taken at a `location` with a certain `name`. What name?
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq .data[0].location.name tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.7" true

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.8 (1 points) 
# 
# The first image has `comments`, show the `text` for that comment.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq .data[0].comments.data[0].text tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.8" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.9 (1 points) 
# 
# The first image has several likes. Show the name of the second person who
# liked the image.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq .data[0].likes.data[1].full_name tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.9" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.10 (1 points) 
# 
# Show the standard resolution link to the first image.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq .data[0].images.standard_resolution.url tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.10" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.11 (3 points) 
# 
# The user alkifaey has made a comment. Use the username and show the actual
# comment (text).
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#





ANSWER=$(jq '.data[].comments.data[] | select(.from.username == "alkifaey").text' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.11" true

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.12 (3 points) 
# 
# List the links (link) to images that the user 'tobhed' have commented on.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.data[] | select(.comments.data[].from.username == "tobhed") .link' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.12" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.13 (3 points) 
# 
# List the links to images with more than 7 likes.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.data[] | select (.likes.count > 7).link' tag-dbwebb.json)


# I will now test your answer - change false to true to get a hint.
assertEqual "1.13" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.14 (3 points) 
# 
# List the links (link) of the images which has more than 5 likes and at
# least 1 comment.
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.data[] | select(.comments.count >= 1) | select (.likes.count > 5).link' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.14" false

#"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# Exercise 1.15 (3 points) 
# 
# Find the usernames of the users, that liked the image taken at
# 'Studentviken' (location 'Studentviken').
#
# Answer with the result.
#
# Write your code below and put the answer into the variable ANSWER.
#






ANSWER=$(jq '.data[]  | select (.location.name == "Studentviken").likes.data[].username' tag-dbwebb.json)

# I will now test your answer - change false to true to get a hint.
assertEqual "1.15" true


exitWithSummary
