import React, { useEffect, useState } from 'react'


export default function Timer({ seconds, onExpire }) {
const [left, setLeft] = useState(seconds)


useEffect(() => {
setLeft(seconds)
}, [seconds])


useEffect(() => {
const id = setInterval(() => setLeft(t => (t > 0 ? t - 1 : 0)), 1000)
return () => clearInterval(id)
}, [])


useEffect(() => {
if (left === 0) onExpire?.()
}, [left, onExpire])


const h = Math.floor(left / 3600)
const m = Math.floor((left % 3600) / 60)
const s = left % 60


return (
<div className={`timer ${left < 300 ? 'danger' : ''}`}>
{h.toString().padStart(2, '0')}:{m.toString().padStart(2, '0')}:{s
.toString()
.padStart(2, '0')}
</div>
)
}