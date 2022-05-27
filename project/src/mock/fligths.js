export const data =[
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "105368",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "11663.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "1308.92",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "1484.06",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "105368.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "105368.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "93705.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "11663.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 735,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 245,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T09:15:00",
                              "flightNumber" : "1655",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T06:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:25:00",
                              "flightNumber" : "1280",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T16:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 1400,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T19:55:00",
                              "flightNumber" : "1281",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T18:55:00",
                              "flightNumber" : "4898",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T13:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nM7ftO8Pb5bd1HqPpYZhi/Siz3v8DVhk9RxGiAAA="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "KL",
                  "caption" : "KLM",
                  "airlineCode" : "KL"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "36491",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "10326.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "453.30",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "513.96",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "36491.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "36491.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "26165.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "10326.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 355,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73В",
                                    "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "arrivalDate" : "2020-08-18T19:30:00",
                              "flightNumber" : "904",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T17:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T20:55:00",
                              "flightNumber" : "1033",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T20:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 1195,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 75,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T08:35:00",
                              "flightNumber" : "1081",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T06:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 220,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T04:15:00",
                              "flightNumber" : "4860",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T23:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "104598",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "10893.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "1299.35",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "1473.21",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "104598.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "104598.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "93705.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "10893.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 895,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T22:00:00",
                              "flightNumber" : "1455",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T19:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-19T07:55:00",
                              "flightNumber" : "1680",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T07:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 520,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T19:55:00",
                              "flightNumber" : "1281",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 220,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T04:15:00",
                              "flightNumber" : "4860",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T23:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nogAA"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "33560",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "15850.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "416.89",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "472.68",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "33560.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "33560.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "15850.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 570,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-18T09:50:00",
                              "flightNumber" : "6010",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T08:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:00:00",
                              "flightNumber" : "6619",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T14:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 360,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-19T22:25:00",
                              "flightNumber" : "6620",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T01:10:00",
                              "flightNumber" : "45",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T23:50:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nJb/6LT3XwGuenwAA"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "35224",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "8899.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "437.57",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "496.11",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "35224.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "35224.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "26325.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "8899.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 735,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 245,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T09:15:00",
                              "flightNumber" : "1655",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T06:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:25:00",
                              "flightNumber" : "1280",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T16:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 555,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "arrivalDate" : "2020-08-19T19:35:00",
                              "flightNumber" : "1022",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T04:25:00",
                              "flightNumber" : "3183",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T00:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nFBt6IQuqAAA="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "35524",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "17814.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "441.29",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "500.34",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "35524.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "35524.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "17814.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 505,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 95,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-18T11:10:00",
                              "flightNumber" : "12",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T09:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:00:00",
                              "flightNumber" : "6619",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T14:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 220,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "359",
                                    "caption" : "Аэробус А350-900"
                                 },
                              "travelDuration" : 220,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-19T22:55:00",
                              "flightNumber" : "2583",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:15:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nMvKWseQy8YCno6xbfwB7WG3AQ48AAA=="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "TK",
                  "caption" : "TURK HAVA YOLLARI A.O.",
                  "airlineCode" : "TK"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "71548",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "31298.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "888.80",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "1007.72",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "71548.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "71548.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "40250.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "31298.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 605,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 205,
                              "arrivalCity" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "arrivalDate" : "2020-08-18T06:10:00",
                              "flightNumber" : "212",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T02:45:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 270,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T10:50:00",
                              "flightNumber" : "1159",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T08:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 1255,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "77В",
                                    "caption" : "Боинг 777-300ЕР"
                                 },
                              "travelDuration" : 225,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-19T16:45:00",
                              "flightNumber" : "1980",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T11:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "333",
                                    "caption" : "А330-300"
                                 },
                              "travelDuration" : 165,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T09:55:00",
                              "flightNumber" : "413",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T07:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundBeforeDeparture" :
                           {
                              "amount" : "16100",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundableBeforeDeparture" : true,
                        "refundableAfterDeparture" : true
                     }
               }
         },
      "flightToken" : "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\nL28PeDrKCvb/J6HqOCqbAAA="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "33657",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "15947.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "418.10",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "474.04",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "33657.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "33657.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "15947.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 505,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 95,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-18T11:10:00",
                              "flightNumber" : "12",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T09:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:00:00",
                              "flightNumber" : "6619",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T14:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 360,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-19T22:25:00",
                              "flightNumber" : "6620",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T01:10:00",
                              "flightNumber" : "45",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T23:50:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nzGSfAAA="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "TK",
                  "caption" : "TURK HAVA YOLLARI A.O.",
                  "airlineCode" : "TK"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "71548",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "31298.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "888.80",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "1007.72",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "71548.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "71548.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "40250.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "31298.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 710,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "333",
                                    "caption" : "А330-300"
                                 },
                              "travelDuration" : 180,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-18T14:20:00",
                              "flightNumber" : "414",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T11:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 250,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T21:10:00",
                              "flightNumber" : "1983",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T19:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 855,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "77В",
                                    "caption" : "Боинг 777-300ЕР"
                                 },
                              "travelDuration" : 225,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-19T23:25:00",
                              "flightNumber" : "1972",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:40:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "333",
                                    "caption" : "А330-300"
                                 },
                              "travelDuration" : 165,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T09:55:00",
                              "flightNumber" : "413",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T07:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundBeforeDeparture" :
                           {
                              "amount" : "16100",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundableBeforeDeparture" : true,
                        "refundableAfterDeparture" : true
                     }
               }
         },
      "flightToken" : "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\nZeWJmgAA"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "23163",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "10038.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "287.74",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "326.24",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "23163.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "23163.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "13125.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "10038.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 735,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 245,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T09:15:00",
                              "flightNumber" : "1655",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T06:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:25:00",
                              "flightNumber" : "1280",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T16:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 565,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 75,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T08:35:00",
                              "flightNumber" : "1081",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T06:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-19T17:45:00",
                              "flightNumber" : "1454",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T12:45:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "112648",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "10893.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "1399.35",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "1586.59",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "112648.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "112648.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "101755.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "10893.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 735,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 245,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T09:15:00",
                              "flightNumber" : "1655",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T06:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:25:00",
                              "flightNumber" : "1280",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T16:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 480,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T11:15:00",
                              "flightNumber" : "306",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T08:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "CS40AENN"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "BA",
                                    "caption" : "British Airways p.l.c.",
                                    "airlineCode" : "BA"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "C",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-19T18:55:00",
                              "flightNumber" : "4898",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T13:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "CS40AENN"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\ns2z+H0A/w3NKmgAA"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "148873",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "10893.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "1849.35",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "2096.80",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "148873.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "148873.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "137980.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "10893.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 795,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T13:05:00",
                              "flightNumber" : "4899",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T10:05:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           },
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T21:20:00",
                              "flightNumber" : "1380",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T20:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "IS50AENB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 790,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "I",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-19T11:15:00",
                              "flightNumber" : "306",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T08:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "CS40AENN"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "BA",
                                    "caption" : "British Airways p.l.c.",
                                    "airlineCode" : "BA"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "C",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 220,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T00:05:00",
                              "flightNumber" : "1654",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T19:25:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "BUSINESS FLEX",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "CS40AENN"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 2,
                                                "nil" : false,
                                                "unit" : "шт"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "KL",
                  "caption" : "KLM",
                  "airlineCode" : "KL"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "24413",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "9033.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "303.27",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "343.85",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "24413.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "24413.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "15380.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "9033.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 355,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73В",
                                    "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "arrivalDate" : "2020-08-18T19:30:00",
                              "flightNumber" : "904",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T17:00:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T20:55:00",
                              "flightNumber" : "1033",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T20:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 1580,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "arrivalDate" : "2020-08-19T14:05:00",
                              "flightNumber" : "1010",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T11:45:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73В",
                                    "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T16:05:00",
                              "flightNumber" : "903",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T11:50:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "TK",
                  "caption" : "TURK HAVA YOLLARI A.O.",
                  "airlineCode" : "TK"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "33597",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "23132.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "417.35",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "473.20",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "33597.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "33597.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "10465.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "23132.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 995,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "Q",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 185,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-18T23:25:00",
                              "flightNumber" : "416",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T20:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "QN2PX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 30,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "Q",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SAW",
                                    "caption" : "САБИХА ГОКЦЕН"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 250,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-19T10:55:00",
                              "flightNumber" : "7798",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T08:45:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "QN2PX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 30,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "STN",
                                    "caption" : "Лондон, Станстед"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 1155,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "P",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 230,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-20T04:00:00",
                              "flightNumber" : "1984",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T22:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "PN2XPB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 30,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "P",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 165,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T19:25:00",
                              "flightNumber" : "415",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T16:40:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "PN2XPB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 30,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "33697",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "15987.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "418.60",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "474.61",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "33697.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "33697.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "15987.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 260,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "359",
                                    "caption" : "Аэробус А350-900"
                                 },
                              "travelDuration" : 260,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:00:00",
                              "flightNumber" : "2582",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T13:40:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 225,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 225,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T04:30:00",
                              "flightNumber" : "2585",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T22:45:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "35524",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "17814.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "441.29",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "500.34",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "35524.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "35524.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "17814.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 580,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 90,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-18T09:50:00",
                              "flightNumber" : "10",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T08:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 210,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T16:00:00",
                              "flightNumber" : "6619",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T14:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 220,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "359",
                                    "caption" : "Аэробус А350-900"
                                 },
                              "travelDuration" : 220,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-19T22:55:00",
                              "flightNumber" : "2583",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:15:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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"
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "31733",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "14023.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "394.20",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "446.94",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "31733.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "31733.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "14023.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 265,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 265,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T09:30:00",
                              "flightNumber" : "2580",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T07:05:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 925,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-19T22:25:00",
                              "flightNumber" : "6620",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 90,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T10:35:00",
                              "flightNumber" : "6027",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T09:05:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nY14ylhwmHvJ0nPbq/wGznJIVhI8AAA=="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "SU1",
                  "caption" : "Аэрофлот - российские авиалинии",
                  "airlineCode" : "SU"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "31830",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "14120.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "395.40",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "448.31",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "31830.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "31830.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "17710.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "14120.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 265,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 265,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T09:30:00",
                              "flightNumber" : "2580",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T07:05:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 865,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "arrivalDate" : "2020-08-19T22:25:00",
                              "flightNumber" : "6620",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T17:10:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "FV",
                                    "caption" : "ГТК Россия",
                                    "airlineCode" : "FV"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "ПУЛКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LED",
                                    "caption" : "САНКТ-ПЕТЕРБУРГ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "320",
                                    "caption" : "А320"
                                 },
                              "travelDuration" : 80,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T09:35:00",
                              "flightNumber" : "3",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-20T08:15:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LITE",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LNB"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "airlineAlliance" :
               {
                  "uid" : "*S",
                  "caption" : "Skyteam"
               },
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "2978",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\ncmfMW8aKy8RDno7TXv0/JY6utkCPAAA="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "TK",
                  "caption" : "TURK HAVA YOLLARI A.O.",
                  "airlineCode" : "TK"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "67854",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "27604.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "842.91",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "955.69",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "67854.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "67854.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "40250.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "27604.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "PAID",
                        "caption" : "Платно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 1465,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "333",
                                    "caption" : "А330-300"
                                 },
                              "travelDuration" : 180,
                              "arrivalCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "arrivalDate" : "2020-08-18T14:20:00",
                              "flightNumber" : "414",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T11:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "IST",
                                    "caption" : "СТАМБУЛ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 250,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-19T09:45:00",
                              "flightNumber" : "1981",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T07:35:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 650,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LGW",
                                    "caption" : "Лондон, Гатвик"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 265,
                              "arrivalCity" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "arrivalDate" : "2020-08-19T19:20:00",
                              "flightNumber" : "1160",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T12:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 }
                           },
                           {
                              "classOfServiceCode" : "J",
                              "classOfService" :
                                 {
                                    "uid" : "BUSINESS",
                                    "caption" : "Бизнес"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AYT",
                                    "caption" : "АНТАЛЬЯ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "32Б",
                                    "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                 },
                              "travelDuration" : 205,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-20T01:45:00",
                              "flightNumber" : "211",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T22:20:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "fareBasis" :
                                       {
                                          "ADULT" : "JN2BX"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "pieces" : 40,
                                                "nil" : false,
                                                "unit" : "кг"
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "TK",
                                    "caption" : "TURK HAVA YOLLARI A.O.",
                                    "airlineCode" : "TK"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "VKO",
                                    "caption" : "ВНУКОВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundBeforeDeparture" :
                           {
                              "amount" : "16100",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "refundableBeforeDeparture" : true,
                        "refundableAfterDeparture" : true
                     }
               }
         },
      "flightToken" : "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\nR1nB/giLPqp1JJsAAA=="
   },
   {
      "hasExtendedFare" : false,
      "flight" :
         {
            "carrier" :
               {
                  "uid" : "AF",
                  "caption" : "Air France",
                  "airlineCode" : "AF"
               },
            "price" :
               {
                  "total" :
                     {
                        "amount" : "35064",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "totalFeeAndTaxes" :
                     {
                        "amount" : "8899.00",
                        "currency" : "руб.",
                        "currencyCode" : "RUB"
                     },
                  "rates" :
                     {
                        "totalUsd" :
                           {
                              "amount" : "435.58",
                              "currencyCode" : "EUR"
                           },
                        "totalEur" :
                           {
                              "amount" : "493.86",
                              "currencyCode" : "USD"
                           }
                     },
                  "passengerPrices" :
                     [
                        {
                           "total" :
                              {
                                 "amount" : "35064.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerType" :
                              {
                                 "uid" : "ADULT",
                                 "caption" : "Взрослый"
                              },
                           "singlePassengerTotal" :
                              {
                                 "amount" : "35064.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "passengerCount" : 1,
                           "tariff" :
                              {
                                 "amount" : "26165.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              },
                           "feeAndTaxes" :
                              {
                                 "amount" : "8899.00",
                                 "currency" : "руб.",
                                 "currencyCode" : "RUB"
                              }
                        }
                     ]
               },
            "servicesStatuses" :
               {
                  "baggage" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     },
                  "exchange" :
                     {
                        "uid" : "FREE",
                        "caption" : "Бесплатно"
                     },
                  "refund" :
                     {
                        "uid" : "OFF",
                        "caption" : "Недоступно"
                     }
               },
            "legs" :
               [
                  {
                     "duration" : 795,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "321",
                                    "caption" : "АЭРОБУС321"
                                 },
                              "travelDuration" : 240,
                              "arrivalCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "arrivalDate" : "2020-08-18T13:05:00",
                              "flightNumber" : "4899",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T10:05:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "operatingAirline" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 }
                           },
                           {
                              "classOfServiceCode" : "L",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "CDG",
                                    "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "PAR",
                                    "caption" : "ПАРИЖ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "319",
                                    "caption" : "AirbusA319"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "arrivalDate" : "2020-08-18T21:20:00",
                              "flightNumber" : "1380",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-18T20:55:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "LS50ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 }
                           }
                        ]
                  },
                  {
                     "duration" : 455,
                     "segments" :
                        [
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "LHR",
                                    "caption" : "Лондон, Хитроу"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "LON",
                                    "caption" : "ЛОНДОН"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73Х",
                                    "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                 },
                              "travelDuration" : 85,
                              "arrivalCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "arrivalDate" : "2020-08-19T08:55:00",
                              "flightNumber" : "1000",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T06:30:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : true,
                              "arrivalAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 }
                           },
                           {
                              "classOfServiceCode" : "T",
                              "classOfService" :
                                 {
                                    "uid" : "ECONOMY",
                                    "caption" : "Эконом"
                                 },
                              "departureAirport" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "Схипхол"
                                 },
                              "departureCity" :
                                 {
                                    "uid" : "AMS",
                                    "caption" : "АМСТЕРДАМ"
                                 },
                              "aircraft" :
                                 {
                                    "uid" : "73В",
                                    "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                 },
                              "travelDuration" : 195,
                              "arrivalCity" :
                                 {
                                    "uid" : "MOW",
                                    "caption" : "Москва"
                                 },
                              "arrivalDate" : "2020-08-19T16:05:00",
                              "flightNumber" : "903",
                              "techStopInfos" :
                                 [
                                 ],
                              "departureDate" : "2020-08-19T11:50:00",
                              "stops" : 0,
                              "servicesDetails" :
                                 {
                                    "freeCabinLuggage" :
                                       {
                                       },
                                    "paidCabinLuggage" :
                                       {
                                       },
                                    "tariffName" : "ECONOMY LIGHT2",
                                    "fareBasis" :
                                       {
                                          "ADULT" : "TS55ABLG"
                                       },
                                    "freeLuggage" :
                                       {
                                          "ADULT" :
                                             {
                                                "nil" : true
                                             }
                                       },
                                    "paidLuggage" :
                                       {
                                       }
                                 },
                              "airline" :
                                 {
                                    "uid" : "KL",
                                    "caption" : "KLM",
                                    "airlineCode" : "KL"
                                 },
                              "starting" : false,
                              "arrivalAirport" :
                                 {
                                    "uid" : "SVO",
                                    "caption" : "ШЕРЕМЕТЬЕВО"
                                 }
                           }
                        ]
                  }
               ],
            "exchange" :
               {
                  "ADULT" :
                     {
                        "exchangeableBeforeDeparture" : true,
                        "exchangeAfterDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeBeforeDeparture" :
                           {
                              "amount" : "0",
                              "currency" : "руб.",
                              "currencyCode" : "RUB"
                           },
                        "exchangeableAfterDeparture" : true
                     }
               },
            "isTripartiteContractDiscountApplied" : false,
            "international" : false,
            "seats" :
               [
                  {
                     "count" : 1,
                     "type" :
                        {
                           "uid" : "ADULT",
                           "caption" : "Взрослый"
                        }
                  }
               ],
            "refund" :
               {
                  "ADULT" :
                     {
                        "refundableBeforeDeparture" : false,
                        "refundableAfterDeparture" : false
                     }
               }
         },
      "flightToken" : "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\nr+3bg9e9b5d5jianYQL1w9y//w/Sx/k2GqoAAA=="
   },
]