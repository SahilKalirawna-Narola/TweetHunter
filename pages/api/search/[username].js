export default function handler(req, res) {
	const {
		query: { username },
		method,
	} = req;

	console.log("ska userName", username);

	switch (method) {
		case "GET":

			res.status(200).json({ name: `User` });
			break;
		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.twitter.com/2/users/by/username/narendramodi',
//   headers: { 
//     'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE', 
//     'Cookie': 'guest_id=v1%3A164726258429875783; guest_id_ads=v1%3A164726258429875783; guest_id_marketing=v1%3A164726258429875783; personalization_id="v1_VJRM7CGfKpp2HDedpZt/5A=="'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.twitter.com/2/users/18839785/tweets?expansions=author_id,attachments.media_keys&tweet.fields=id,created_at,text,attachments,entities,public_metrics,possibly_sensitive,source,lang&user.fields=id,name,username,verified,profile_image_url&media.fields=media_key,preview_image_url,type,url,alt_text',
//   headers: { 
//     'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALbZaAEAAAAAhIBBjaU4eUNvyu%2FWdLIeSB681cw%3Dl3CTTwhbyfFblJkU0GxPHYQZ6W3pvHT8NruoBy6jfHUI2iiIrE', 
//     'Cookie': 'guest_id=v1%3A164726258429875783; guest_id_ads=v1%3A164726258429875783; guest_id_marketing=v1%3A164726258429875783; personalization_id="v1_VJRM7CGfKpp2HDedpZt/5A=="'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
