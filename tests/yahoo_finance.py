import yfinance as yf


coins = ["AAPL"]

tickers = yf.Tickers(" ".join(coins))
data = yf.download(coins, start="2020-01-01", end="2023-01-01")

coins_data = []

for coin in coins:
    coins_data.append({
        "": ""
    })


print("---------------- BTC INFO ----------------\n\n")
print(data)

