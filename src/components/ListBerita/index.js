/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ListBerita(props) {
  let { keyword } = useParams();
  const kategori = props.kategori;
  const [listBerita, setlistBerita] = useState([]);
  const url = "https://api-sindo.herokuapp.com";
  const getBerita = async () => {
    if (keyword) {
      console.log(kategori+keyword);
      const response = await axios.get(url + kategori + keyword);
      setlistBerita(response.data.data);
    } else {
      console.log(kategori);
      const response = await axios.get(url + kategori);
      setlistBerita(response.data.data);
    }
  };
  useEffect(() => {
    setlistBerita([]);
    getBerita();
  }, [kategori, keyword]);
  return (
    <Container className="pt-2">
      {listBerita.map((item, key) => {
        if (
          item.link &&
          !item.link.includes("otomotif") &&
          !item.link.includes("tekno") &&
          !item.link.includes("lifestyle") &&
          !item.link.includes("celebrity.okezone") &&
          !item.link.includes("kalam") &&
          item.judul &&
          item.waktu &&
          item.poster &&
          item.tipe !== "Video" &&
          item.tipe !== "Otomotif" &&
          item.tipe !== "Edukasi" &&
          item.tipe !== "iNews" &&
          item.kutipan
        ) {
          return (
            <Card className="p-2 my-1" key={key}>
              <Row>
                <Col>
                  <Card.Img src={item.poster} />
                </Col>
                <Col md={10}>
                  <div className="text-justify">
                    <Card.Title>
                      <h5 className="fw-bolder">{item.judul}</h5>
                      <Card.Subtitle className="mb-2 text-muted small">
                        {item.waktu}
                      </Card.Subtitle>
                    </Card.Title>
                    <Card.Text>{item.kutipan}</Card.Text>
                    <Link to={`/detail/${btoa(item.link)}`}>
                      <Button size="sm">Baca Selengkapnya</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card>
          );
        } else return null;
      })}
    </Container>
  );
}

export default ListBerita;
