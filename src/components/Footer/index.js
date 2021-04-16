import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <div className="bg-dark py-3">
            <Container>
                <div className="text-center text-white">Dibuat menggunakan API Berita Sindonews dari <a href="https://github.com/rizki4106/API-BERITA-SINDO-NEWS">https://github.com/rizki4106/API-BERITA-SINDO-NEWS</a>. Beberapa artikel mungkin tidak tampil karena API memang banyak kekurangan, dan baru saya coba perbaiki sendiri sedikit demi sedikit.</div>
            </Container>
        </div>
    )
}

export default Footer
