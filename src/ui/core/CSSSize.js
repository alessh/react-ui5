import React from 'react'

const CSSSize = {
	isValid : function(vValue) {
		// Note: the following regexp by intention is a single regexp literal.
		// It could be made much more readable by constructing it out of (reused) sub-expressions (strings)
		// but this would not be parseable by the metamodel recovery tooling that is used inside SAP
		return /^(auto|inherit|[-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%))|calc\(\s*(\(\s*)*[-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)?)(\s*(\)\s*)*(\s[-+]\s|[*\/])\s*(\(\s*)*([-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)?)))*\s*(\)\s*)*\))$/.test(vValue);
	},
	React.PropTypes.string
}

export { CSSSize }