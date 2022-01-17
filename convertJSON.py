#import urllib.request
import json
import csv
import requests
import key

url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries"

headers = {
    'x-rapidapi-host': "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    'x-rapidapi-key': key.verify
    }

response = requests.request("GET", url, headers=headers)

print(response.text)
#print(response.encoding) # checks encoding and is already in the right format
readfile = response.json()



with open('usaCases.csv','w',newline='') as caseData:
    csvwriter = csv.writer(caseData)
    count = 0
    for result in readfile:
        if count == 0:
            header = result.keys()
            csvwriter.writerow(header)
            count+=1
        csvwriter.writerow(result.values())