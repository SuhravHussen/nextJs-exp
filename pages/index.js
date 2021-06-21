// @ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { Card, Calendar, Picklist, PicklistOption } from 'react-rainbow-components';

export default function Home() {
 
  const [date , setDate]= useState(new Date())

  return (
    <div >
       <Calendar
                    id="calendar-1"
                    locale={ 'en-US'}
                    value={date}
                    onChange={value => setDate(value)}
                />
     
    </div>
  )
}
