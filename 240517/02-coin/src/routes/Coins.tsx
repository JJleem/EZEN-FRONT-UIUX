import React, { useState, useEffect } from "react";
import Styled, { styled } from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 16px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
  margin: 30px;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// const coins = [
//   {
//     id: "btc - bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth - ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex - hex",
//     name: "Hex",
//     symbol: "Hex",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "token",
//   },
// ];

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  // const data = async () => {
  //   const response = await fetch(
  //     "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //   );
  //   const json = await response.json();
  //   console.log(json);
  // };
  // (async () => {
  //   const response = await fetch(
  //     "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //   );
  //   const json = await response.json();
  //   setCoins(json);
  //   setLoading(false);
  // })();
  // }, []);

  if (isLoading) {
    return <Loader>loading</Loader>;
  } else {
    return (
      <Container>
        <Helmet>
          <title>Coin</title>
        </Helmet>
        <Header>
          <Title>Coins Information</Title>
        </Header>
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                {coin.rank}.
                <Img
                  src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                />{" "}
                {coin.name} ({coin.symbol}) &rarr; {coin.name} 상세정보 보러가기
              </Link>
            </Coin>
          ))}
        </CoinList>
      </Container>
    );
  }
};

export default Coins;
