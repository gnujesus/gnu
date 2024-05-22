
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime as dt
import pytz
import asyncio
import os
import json

# From binance-connector
from binance.spot import Spot

#From python-binance
from binance.client import Client

#import websockets

# Código de prueba GNU Binance

# drive.mount('/content/drive')
# os.chdir("/content/drive/")

client = Client(api_key='ABzMGzpN1WChoBFHHxEaodEcBUlOgCaFcc75R8unXdFvgfcjNlPQlma5Eik0e4E0', api_secret='BYUbTAIVxtkzUAq5kq86xXWFv8Kw4ji2awFTjMrwVVP3R08eM6nkIrUmHUJCYOyU')
# fetch weekly klines since it listed

coins_arr = ["SOLUSDT", "BTCUSDT", "LINKUSDT", "DOGEUSDT", "NEOUSDT", "YFIUSDT", "ETHUSDT","BOMEUSDT", "PEPEUSDT", "LTOUSDT"]

klines_arr = []

for coin in coins_arr:
  klines = client.get_historical_klines(coin, Client.KLINE_INTERVAL_1DAY, "1 Jan, 2015", "1 Jan 2024")
  info = client.get_symbol_info(coin)
  obj = {'klines': klines, 'info': info}
  klines_arr.append(obj)


def get_market_cap(symbol, current_price, volume):
  return current_price * volume

data_arr = []

for obj in klines_arr: #O(2n²)
  for kline in obj['klines']:
    symbol = obj['info']['symbol']
    timestamp = kline[0]
    datetime = dt.fromtimestamp(timestamp / 1000).strftime('%Y-%m-%d %H:%M:%S')
    open_price = float(kline[1]) # Open price
    high = float(kline[2]) # Highest price on opening
    low = float(kline[3]) # Lowest price on opening
    close_price = float(kline[4])  # Close price
    volume = float(kline[5]) #Volume
    number_of_trades = float(kline[8])
    range_high_low=high-low
    market_cap = get_market_cap(symbol, close_price, volume) # Close price is passed since it's the ending price
    coin_name = symbol  # Based on the symbol used

    data = {"coin_name": coin_name, "symbol": symbol,  "datetime": str(datetime),"open": open_price,'high': high, 'low':low, 'range': range_high_low,"close_price": close_price, "volume": volume, "number_of_trades": number_of_trades, "market_cap": market_cap}
    data_arr.append(data)

def filter_arr(arr, attribute, value):
  new_arr=[]

  for obj in arr:
    if value in obj[attribute]:
      new_arr.append(obj)

  return new_arr

def bubble_sort_by_attribute(arr, attr):
  length = len(arr) - 1
  print(length)
  sorted = False

  while not sorted:
    sorted = True
    for i in range(length):
      if arr[i][attr] > arr[i+1][attr]:
        sorted = False
        arr[i], arr[i+1] = arr[i+1], arr[i]

  return arr

data_2017_09 = filter_arr(data_arr, "datetime", "2017-09")
data_2017 = filter_arr(data_arr, "datetime", "2017")
most_valuable_cryptos_2017 = bubble_sort_by_attribute(data_2017_09, "volume")
cryptos_2017_by_range = bubble_sort_by_attribute(data_2017, "range")

print(data_2017_09)


# f = open('/content/drive/MyDrive/output.json','w')
# f.write(json.dumps(cryptos_2017_by_range, indent=2))

