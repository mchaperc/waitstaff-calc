(function() {
	var app = angular.module('app', []);

	app.controller('CalculatorLogic', function() {
		var self = this;

		self.inputs = {
			base_price: 0,
			tax_rate: 0,
			tip_percent: 0
		}

		self.clearForm = function() {
			self.inputs = {
				base_price: 0,
				tax_rate: 0,
				tip_percent: 0
			}
		}

		self.meal_count = 0;

		self.tips = [];

		self.avg_tips = 0;

		self.subtotal = 0;

		self.current_tip = 0;

		self.total_cost = 0;

		self.tip_total = 0;

		self.meal_count = 0;

		self.taxes = 0;


		self.calc = function() {
			self.subtotal = self.inputs.base_price;
			self.current_tip = (self.inputs.base_price * (self.inputs.tip_percent/100));
			self.tips.push(self.current_tip);
			self.taxes = self.subtotal * (self.inputs.tax_rate/100);
			self.total_cost = self.subtotal + self.taxes + self.current_tip;
			self.meal_count++;
			self.avgTip();
		}

		self.avgTip = function() {
			self.tip_total = 0;
			for (var i = 0; i < self.tips.length; i++) {
				self.tip_total += self.tips[i];
				self.avg_tips = self.tip_total / (self.tips.length);
			}
		}

	})
})();