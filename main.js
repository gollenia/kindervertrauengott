import './style.css';

function getPlatform() {
  return navigator.platform;
}

const appLinks = {
	'youversion': {
	ios : 'https://itunes.apple.com/us/app/bible/id332615624?mt=8',
	android : 'https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android&hl=en',
	kindle : 'https://www.amazon.com/YouVersion-Bible-App-Free-Read/dp/B004MC8BNU',
	blackberry : 'http://appworld.blackberry.com/webstore/content/23007/?lang=en&countrycode=US',
	windows : 'https://www.microsoft.com/en-us/store/p/bible/9wzdncrfj3t8',
	other : 'https://www.bible.com/app'
	},
	'youVersionKids': {
	ios : 'https://itunes.apple.com/de/app/bible-for-kids/id668692393?ls=1&mt=8',
	android : 'https://play.google.com/store/apps/details?id=com.bible.kids&featurem&hl=de',
	kindle : 'http://www.amazon.de/YouVersion-Bible-for-Kids/dp/B00GURLC40/ref=sr_1_2?s=mobile-apps&ie=UTF8&qid=1436459812',
	other : 'https://www.bible.com/app'
	}
}

function getAppLink(appName) {
	const platform = getPlatform();
	const appLink = appLinks[appName][platform] || appLinks[appName]['other'];
	return appLink;
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('youVersionKids').setAttribute('href', getAppLink('youVersionKids'));
	document.getElementById('youversion').setAttribute('href', getAppLink('youversion'));
})

