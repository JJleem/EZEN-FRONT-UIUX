import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      setCoins(json);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        <Loader>"Loading...."</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                {coin.rank}.
                <Img
                  src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                />
                ({coin.symbol}) &rarr; {coin.name} 상세정보 보러가기
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
  margin: 30px;
`;
const Loader = styled.div`
  display: block;
  text-align: center;
`;
const Container = styled.div`
  padding: 20px;
  max-width: 1024px;
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
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.blackColor};
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 4px 0px #000;
  a {
    display: flex;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s;
    &:hover {
      color: ${(props) => props.theme.bgColor};
    }
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  display: flex;
  margin: 0 10px;
`;
