import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Link,
  Routes,
  Route,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}
const Coin = () => {
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  const [loading, setLoading] = useState(true);
  const priceMatch = useMatch("/:coinId/price");
  console.log(priceMatch);
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();

      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          CoinName: {state ? state : loading ? "Loading" : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Trasfer? : </span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.name}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>First Data : </span>
              <span>{priceInfo?.first_data_at}</span>
            </OverviewItem>
          </Overview>
          <Link to={`/${coinId}/chart`}>Chart</Link>
          <Link to={`/${coinId}/price`}>Price</Link>
          <Routes>
            <Route path="/chart" element={<Chart />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;

const Container = styled.div`
  padding: 20px;
  max-width: 720px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.blackColor};
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
`;
