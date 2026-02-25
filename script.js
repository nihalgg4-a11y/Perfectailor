body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f8f8f8;
}

/* HERO */
.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1593032465175-481ac7f401a0') center/cover;
  position: relative;
}

.overlay {
  background: rgba(0,0,0,0.6);
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay h1 {
  font-size: 60px;
}

.overlay p {
  font-size: 20px;
  margin-bottom: 20px;
}

.overlay button {
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  background: #ff4d4d;
  color: white;
  cursor: pointer;
}

/* SERVICES */
.services {
  text-align: center;
  padding: 50px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 10px;
  width: 250px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card h3 {
  margin: 10px 0;
}

/* BOOKING */
.booking {
  background: #111;
  color: white;
  padding: 50px;
  text-align: center;
}

.booking input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
}

.booking button {
  padding: 10px 20px;
  background: #ff4d4d;
  border: none;
  color: white;
}

/* MEASUREMENTS */
.measurements {
  padding: 50px;
  text-align: center;
}

.measurements input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
}

.measurements button {
  padding: 10px 20px;
  background: black;
  color: white;
}

/* FOOTER */
footer {
  background: black;
  color: white;
  text-align: center;
  padding: 20px;
}
