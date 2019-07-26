let currentProfileId = 2;
let profileData = [
	{
		id: 1,
		avatar: "https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200",
		name: "Maxuta Pavel",
		birth: "19 November",
		city: "Chisinau",
		education: "ASEM",
		condtacts: "MaxutaPavel@gmail.com"
	},
	{
		id: 2,
		avatar: "https://klike.net/uploads/posts/2018-06/1528377399_10.jpg",
		name: "Williams Bob",
		birth: "11 December",
		city: "London",
		education: "Harvard",
		contacts: "WilliamsBob@gmail.com"
	}
]

let currentProfile = profileData.filter((item) => item.id === currentProfileId);
currentProfile = currentProfile[0];

export default currentProfile;