"use client";
import { useState } from "react";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "@/hooks/useCurrencyInfo";
import bg from "../public/ccbg.jpeg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <Navbar />
      <div
        className="w-full"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="w-full max-w-md mx-auto border border-white rounded-lg p-5 backdrop-blur bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-md px-2 py-0.5"
                style={{
                  backgroundColor: "#a71e1d",
                  color: "#ccff71",
                  border: "2px solid #ccff71",
                }}
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to} // Corrected to use `to`
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg"
              style={{
                backgroundColor: "#a71e1d",
                color: "#ccff71",
                border: "2px solid #ccff71",
              }}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
