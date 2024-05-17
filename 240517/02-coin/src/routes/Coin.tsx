import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
const Container = styled.div`
  padding: 20px;
  max-width: 480px;
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
  cursor: pointer;
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
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
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.bgColor};
  padding: 7px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 10px;
`;

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

interface PriceData {
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
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [price, setPrice] = useState<PriceData>();
  const navigate = useNavigate();
  const { coinId } = useParams<RouterParams | any>();
  const { state } = useLocation() as LocationState;
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["coinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["coinprice", coinId],
    () => fetchCoinPrice(coinId),
    { refetchInterval: 5000 }
  );

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const onClickHome = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   (async () => {
  // const response = await fetch(
  //   `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  // );
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();

  //     setInfo(infoData);
  //     setPrice(priceData);

  //     setLoading(false);
  //   })();
  // }, []);

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {" "}
          {state
            ? state
            : loading
            ? "loading..."
            : infoData?.name || "loading..."}
        </title>
      </Helmet>
      <Header>
        <Title onClick={onClickHome}>
          coin :{" "}
          {state
            ? state
            : loading
            ? "loading..."
            : infoData?.name || "loading..."}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.name}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="/chart" element={<Chart coinId={coinId} />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
