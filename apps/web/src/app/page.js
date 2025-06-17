'use client'
import { Button } from 'ui/components/Button';

export default function Home() {
  return <Button title="Click Me (Web)" onPress={() => alert("Web button click")} />;
}