const axios = require('axios');

const getUser = async (req, res) => {

  const { user } = req.params;
  try {

    const { data } = await axios.get(`${process.env.GITHUB_API}/users/${user}`);
    const response = {
      id: data.id,
      name: data.name,
      bio: data.bio,
      avatar: data.avatar_url,
      email: data.email,
      url: data.html_url,
      blog: data.blog,
      followers: data.followers,
      following: data.following,
    }
    res.json(response);

  } catch (error) {

    res.status(400 || error.status).json(error.message);

  }

}

module.exports = {

  getUser,

}