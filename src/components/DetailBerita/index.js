/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailBerita() {
  let { url } = useParams();
  const [Berita, setBerita] = useState({
    judul: null,
    konten: null,
    poster: null,
    reporter: null,
    waktu: null,
  });
  const getBerita = async () => {
    const response = await axios.get(
      `https://api-sindo.herokuapp.com/detail/?url=${atob(url)}`
    );
    setBerita(response.data.data[0]);
    console.log(response.data.data[0]);
  };

  useEffect(() => {
    // setBerita();
    getBerita();
  }, [url]);
  return (
    <Container>
      <div className="text-justify border p-3 my-2">
        <Card.Title>
          <h4>{Berita.judul}</h4>
          <Card.Subtitle className="mb-2 small">
            {Berita.reporter}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted small">
            {Berita.waktu}
          </Card.Subtitle>
        </Card.Title>
        <Row>
          <Col xs={12} md={8}>
            <Image style={{width:'100%'}} className="mb-2" src={Berita.poster} alt={Berita.judul} />
          </Col>
        </Row>
        <Card.Text>{Berita.konten}</Card.Text>
      </div>
    </Container>
  );
}

export default DetailBerita;
