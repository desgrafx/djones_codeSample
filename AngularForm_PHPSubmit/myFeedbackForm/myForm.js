function maxLength(el) {	
					if (!('maxLength' in el)) {
						var max = el.attributes.maxLength.value;
						el.onkeypress = function () {
							if (this.value.length >= max) return false;
						};
					}
				}

				maxLength(document.getElementById("summary"));
				maxLength(document.getElementById("zip"));
				maxLength(document.getElementById("phonenumber"));

